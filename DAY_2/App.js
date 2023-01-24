/*
 *  file reloading => HMR - Hot Module Replacement
 *  File watcher algorithm
 *  Bundling
 *  Minify
 *  Cleaning our code
 *  Dev and production
 *  compressiong
 *  super fast build together
 *  image optimization
 *  caching by development
 *  compatible with older version of browers
 *  HTTPS on dev
 *  port number
 *  consistant hashing algorithm
 *  zero config
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 using parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2 from parcel"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hellow: "world",
  },
  [heading, heading2]
);

// console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
