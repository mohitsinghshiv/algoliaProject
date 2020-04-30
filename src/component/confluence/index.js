const algoliasearch = require("algoliasearch");
const { confluenceGet, parseDocuments } = require("./helpers");

const client = algoliasearch("1BG45YLJO5", "38a1d2a23ed5658bd4e874e45074a2ce");
const index = client.initIndex("demoConfluence");

console.log("eeeeee");
const args = process.argv.slice(2);
let from = args.length
  ? new Date(args[0]).getTime()
  : Date.now() - 10 * 60 * 1000;

const run = () => {
  from = 0;
  console.log("eeeeee");
  return confluenceGet("/rest/api/content");
  //   const saveObjects = (link = "/rest/api/content") => {
  //     let lastUpdatedAt = 0;
  //     return confluenceGet("/rest/api/content");
  //     //   .then(({ results, _links }) => {
  //     //     console.log("result ", results);

  //     //     // index.saveObjects(parseDocuments(results)).then((res) => {
  //     //     //   lastUpdatedAt = new Date(
  //     //     //     results[results.length - 1].lastUpdatedAt
  //     //     //   ).getTime();
  //     //     //   if (_links.next && lastUpdatedAt >= from) saveObjects(_links.next);
  //     //     // });
  //     //   })
  //     //   .catch((error) => console.log(error));
  //   };
  //   saveObjects();
};

export default run;
