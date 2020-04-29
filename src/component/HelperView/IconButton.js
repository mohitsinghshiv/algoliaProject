import React, { useState } from "react";
import chrome from "../../img/chrome.png";
import confluence from "../../img/confluence.png";
import jira from "../../img/jira.png";
import { Link } from "react-router-dom";

const IMAGE = {
  chrome,
  confluence,
  jira,
};
export default function IconButton({ iconData }) {
  const [data] = useState(iconData || []);
  const iconImg = data.map((item) => (
    <Link key={item.id} to={item.link}>
      <img className="home-logo-margin" src={IMAGE[item.imgName]} alt="" />
    </Link>
  ));
  return <div>{iconImg}</div>;
}
