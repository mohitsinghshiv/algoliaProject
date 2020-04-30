const rp = require("request-promise-native");
const striptags = require("striptags");

const CONFLUENCE_HOST = "https://mydemodoc.atlassian.net/wiki";
const CONFLUENCE_USERNAME = "demo email";
const CONFLUENCE_PASSWORD = "demo1996";

const parseContent = (html) =>
  html
    ? striptags(html)
        .replace(/(\r\n?)+/g, " ")
        .replace(/\s+/g, " ")
    : "";

module.exports = {
  confluenceGet(uri) {
    console.log("ddddddd");
    const data = rp({
      url: "https://mydemodoc.atlassian.net/wiki/rest/api/content",
      // GET parameters
      qs: {
        limit: 20, // number of item per page
        orderBy: "history.lastUpdated", // sort them by last updated
        expand: [
          // fields to retrieve
          "history.lastUpdated",
          "ancestors.page",
          "descendants.page",
          "body.view",
          "space",
        ].join(","),
      },
      headers: {
        // auth headers
        Authorization: `Basic ${Buffer.from(
          `${CONFLUENCE_USERNAME}:${CONFLUENCE_PASSWORD}`
        ).toString("base64")}`,
      },
      json: true,
    });
    console.log("kkkkkkkkkkkkkkk", data);
    return data;
  },
  parseDocuments(documents) {
    return documents.map(({ body }) => {
      const record = {
        // ...
        content: null, // initialize with null value instead
      };
      let content = parseContent(body.view.value);
      while (content.length) {
        // extract the first 600 characters (without splitting words)
        const chunk = content.replace(/^(.{600}[^\s]*).*/, "$1");
        // remove chunk from the original content
        content = content.substring(chunk.length);
        // inject the content chunk into a copy of the initial record
        return Object.assign({}, record, { content: chunk });
      }
    });
  },
};
