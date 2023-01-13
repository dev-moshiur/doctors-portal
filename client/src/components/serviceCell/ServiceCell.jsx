import "./serviceCell.scss";

import React from "react";

export default function ServiceCell({ serviceName, serviceIcon, describtion }) {
  return (
    <div className="serviceCell">
      <div className="icon">{serviceIcon()}</div>
      <div className="name">{serviceName}</div>
      <div className="desc">{describtion}</div>
      <div className="readMore">
        <a href="#">Read More</a>
      </div>
    </div>
  );
}
