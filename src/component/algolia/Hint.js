import React from "react";
// import config from "../../config";
export default function Hint({ hit }) {
  return (
    <div className="hit">
      <div className="hit-image">
        <a
          className="margin-set"
          href={`${process.env.REACT_APP_GOOGLE_URL}${hit.googleId}/edit`}
        >
          <img className="image" src={hit.image} alt={hit.image} />
          <h3>{hit.name}</h3>
        </a>
      </div>
    </div>
  );
}
