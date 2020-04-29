import React from "react";
import IconButton from "./HelperView/IconButton";
import imgData from "../temp/Icon";
export default function Home() {
  return (
    <div className="home-margin">
      <div className="home-body-margin">
        <p className="home-title-text">
          <span className="home-title-text-span">01</span> Connect your services
        </p>
        <p className="home-title-text-p">
          Documents and data will be synced to your computer for lightning-fast
          navigation.
        </p>
        <IconButton iconData={imgData} />
        <p className="home-title-text-bottom">
          Done connection services? <span> Back to search</span>
        </p>
      </div>
    </div>
  );
}
