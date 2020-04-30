const striptags = require("striptags");

const CONFLUENCE_HOST = "https://mydemodoc.atlassian.net/wiki/";

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
    // ...
  },
  parseDocuments(documents) {
    return documents.map((doc) => ({
      objectID: doc.id,
      name: doc.title,
      url: buildURL(doc._links.webui),
      space: doc.space.name,
      spaceMeta: {
        id: doc.space.id,
        key: doc.space.key,
        url: buildURL(doc.space._links.webui),
      },
      lastUpdatedAt: doc.history.lastUpdated.when,
      lastUpdatedBy: doc.history.lastUpdated.by.displayName,
      lastUpdatedByPicture: buildURL(
        doc.history.lastUpdated.by.profilePicture.path.replace(
          /(\?[^\?]*)?$/,
          "?s=200"
        )
      ),
      createdAt: doc.history.createdDate,
      createdBy: doc.history.createdBy.displayName,
      createdByPicture: buildURL(
        doc.history.createdBy.profilePicture.path.replace(
          /(\?[^\?]*)?$/,
          "?s=200"
        )
      ),
      path: doc.ancestors.map(({ title }) => title).join(" › "),
      level: doc.ancestors.length,
      ancestors: doc.ancestors.map(({ id, title, _links }) => ({
        id: id,
        name: title,
        url: buildURL(_links.webui),
      })),
      children: doc.descendants
        ? doc.descendants.page.results.map(({ id, title, _links }) => ({
            id: id,
            name: title,
            url: buildURL(_links.webui),
          }))
        : [],
      content: parseContent(doc.body.view.value),
    }));
  },
};
