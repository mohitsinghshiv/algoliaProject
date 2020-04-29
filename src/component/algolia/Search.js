import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import Hit from "./Hint";
import config from "../../config";
export default function Search() {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    setIsShow(value != null ? true : false);
  }, [value]);
  const { algoliaId, algoliaApiKey, algoliaIndexName } = config;
  const searchClient = algoliasearch(algoliaId, algoliaApiKey);
  return (
    <div className="search-margin">
      <InstantSearch indexName={algoliaIndexName} searchClient={searchClient}>
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
