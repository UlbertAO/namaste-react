import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement(
  "h1",
  { className: "class", id: "id" },
  "namReact {rocket}"
);

// React.createElement => obj =>render => html

// jsx
const jsxHeading = <h1 id="jsx">jsx heading</h1>;
// babel(jsx=> react.createelement)=>obj=>render=>html
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
