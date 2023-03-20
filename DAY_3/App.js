/*
 &  file reloading => HMR - Hot Module Replacement
 &  File watcher algorithm
 &  Bundling
 &  Minify
 &  Cleaning our code
 &  Dev and production
 &  compressiong
 &  super fast build together
 &  image optimization
 &  caching by development
 &  compatible with older version of browers
 &  HTTPS on dev
 &  port number
 &  consistant hashing algorithm
 &  zero config
 & Tree shaking
 */

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

/* 
 div class = "header"> 
  <h1>Namaste React</h1>
   <ul>
     <li>About</li>
     <li>Support</li>
     <li>Home</li>
   </ul>
 </div> 
*/

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key: "title2",
//   },
//   "Heading 2 from parcel"
// );

const container = React.createElement(
  "div",
  {
    id: "container",
    hellow: "world",
  },
  [
    React.createElement(
      "h1",
      {
        id: "title",
        key: "title1",
      },
      "Namaste React"
    ),
    React.createElement("ul", {}, [
      React.createElement("li", {}, "About Us"),
      React.createElement("li", {}, "Contact Us"),
      React.createElement("li", {}, "Home"),
    ]),
  ]
);

//  JSX for above code

//this is known as the react element
const Title = () => (
  <h1 id="hlo" key="h2" tabIndex="1 ">
    Hello Namaste
  </h1>
);

//React component 1.functional component 2.Class Based Component - old way

/* functional component
Name of component starts with capital letter - it's not mandatory but it's conviction
*/

// composing component - using component inside component
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>Babel is Beast</h1>
      <h2>Parcel is also Beast</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
