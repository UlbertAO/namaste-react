import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement(
  "h1",
  { className: "class", id: "id" },
  "namReact {rocket}"
);

// React.createElement => obj =>render => html

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
