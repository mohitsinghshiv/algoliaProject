import React from "react";
import { Hits } from "react-instantsearch-dom";
import Hit from "./Hint";
export default function Content() {
  console.log("eeeeee:>", Hits);
  return (
    <div>
      <div className="content">
        <Hits hitComponent={Hit} />
      </div>
      <hr></hr>
    </div>
  );
}
