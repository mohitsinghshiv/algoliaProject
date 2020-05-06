import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import config from "../../config";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
const { algoliaId, algoliaApiKey, algoliaConfluenceIndexName } = config;

const searchClient = algoliasearch(algoliaId, algoliaApiKey);

const Hit = ({ hit }) => (
  <div className="hit">
    <div className="hit-image">
      <a href={hit.Project}>
        <img className="image" src={hit.image} alt={hit.image} />
      </a>
    </div>
    <div>
      <div className="proj-content">
        <a href={hit.Project}>
          <h2 className="heading">
            <Highlight hit={hit} attribute="ProjectName" />
          </h2>
        </a>
        <p className="proj">
          <Highlight hit={hit} attribute="name" />
        </p>
      </div>
    </div>
    <div></div>
  </div>
);
export default function SearchConfluence() {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    setIsShow(value != null ? true : false);
  }, [value]);

  return (
    <div className="search-margin">
      <InstantSearch
        indexName={algoliaConfluenceIndexName}
        searchClient={searchClient}
      >
        <SearchBox
          className="searchbox-margin"
          autoFocus={false}
          searchAsYouType={true}
          showLoadingIndicator={true}
          onChange={(e) =>
            setValue(e.target.value === "" ? null : e.target.value)
          }
        />
        <main>{isShow && <Hits hitComponent={Hit} />}</main>
      </InstantSearch>
    </div>
  );
}
