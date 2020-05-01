import React,{ useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits , Highlight } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
    'UE79BOFCH0',
    '39bcba225bacc52c6cc67ff0814fda7a'
  );

  
const Hit=({hit}) => (
    <div className='hit'>
        <div className='hit-image'>
        <a href={hit.Project.self}>
          <img className='image' src={hit.Project.avatarUrls['48x48']} alt='name' />
        </a>
        </div>
        <div>
           
            <div className ="proj-content"> 
                <a href={hit.Project.self}>
                    <h2 className='heading'><Highlight hit={hit} attribute="ProjectName" /></h2>
                </a>
                <p className='proj'><b>Issue Type</b> : <Highlight hit={hit.Issue.fields.issuetype} attribute="name" /></p>
                <p className='proj'><b> Issue Summary </b> : <Highlight hit={hit} attribute="Summary" /></p>
                <p className='proj'><b> Issue Description </b> : <Highlight hit={hit} attribute="Description" /></p>
                {/* <a href={hit.self} className='proj'>
                   <b> Project self link </b>: <Highlight hit={hit} attribute="self" />
                </a> */}
            </div>
        </div>
        <div>
       
        </div>
    </div>
);
export default function SearchJira() {
    const [isShow, setIsShow] = useState(false);
    const [value, setValue] = useState();
    
    useEffect(() => {
      setIsShow(value != null ? true : false);
    }, [value]);
   
    return (
      <div className="search-margin">
            <InstantSearch
                    indexName="Isses_Name"
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


