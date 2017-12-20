import React from "react";

export const Row = ({ fluid, children }) =>
  <div className="articleList">
    {children}
  </div>;


// className={`row${fluid ? "-fluid" : ""}`}