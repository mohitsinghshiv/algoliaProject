const algoliasearch = require("algoliasearch");
const { confluenceGet, parseDocuments } = require("./helpers");

const client = algoliasearch("1BG45YLJO5", "38a1d2a23ed5658bd4e874e45074a2ce");
const index = client.initIndex("demoConfluence");

// index.js
console.log("eeeeee");
const args = process.argv.slice(2);
let from = args.length
  ? new Date(args[0]).getTime()
  : Date.now() - 10 * 60 * 1000;

const run = () => {
  const saveObjects = (link = "/rest/api/content") =>
    confluenceGet(link).then(({ results, _links }) => {
      index.saveObjects(parseDocuments(results)).then((res) => {
        if (_links.next) saveObjects(_links.next);
      });
    });
  saveObjects();
};

export default run;
