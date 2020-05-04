import React from "react";
export default function Hint({ hit }) {
  return (
    <div className="hit">
      <div className="hit-image">
        <a
          className="margin-set"
          href={`https://docs.google.com/document/d/${hit.id}/edit`}
        >
          <img className="image" src={hit.image} alt={hit.image} />
          <h3>{hit.name}</h3>
        </a>
      </div>
    </div>
  );
}
