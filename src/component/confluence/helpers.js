const rp = require("request-promise-native");
const striptags = require("striptags");

const CONFLUENCE_HOST = "http://mydemodoc.atlassian.net/wiki";
const CONFLUENCE_USERNAME = "demo123go@gmail.com";
const CONFLUENCE_PASSWORD = "gnTQLBqP6P3KHLF9BQe71691";
// https://mydemodoc.atlassian.net/wiki/rest/api/content
const buildURL = (uri) =>
  uri ? CONFLUENCE_HOST + uri.replace(/^\/wiki/, "") : false;

const parseContent = (html) =>
  html
    ? striptags(html)
        .replace(/(\r\n?)+/g, " ")
        .replace(/\s+/g, " ")
    : "";

module.exports = {
  confluenceGet(uri) {
    return rp({
      url: CONFLUENCE_HOST + uri,
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
        "Access-Control-Allow-Origin": "*",
      },
      json: true,
    });
  },
  parseDocuments(documents) {
    return documents.map(({ body }) => {
      const record = {
        // ...
        content: null, // initialize with null value instead
      };
      let content = parseContent(body.view.value);
      console.log("content", content);
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
