import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import Content from "./Content";
import config from "../../config";
export default function Search() {
  const { algoliaId, algoliaApiKey, algoliaIndexName } = config;
  const searchClient = algoliasearch(algoliaId, algoliaApiKey);
  return (
    <div className="search-margin">
      <InstantSearch indexName={algoliaIndexName} searchClient={searchClient}>
        <header className="header">
          <SearchBox />
        </header>
        <main>
          <Content />
        </main>
      </InstantSearch>
    </div>
  );
}
