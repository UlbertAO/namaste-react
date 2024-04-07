import React from "react"; // it will come from node_modules
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
); // create h1 element
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root")); // react need a place to render items
root.render(heading); // add heading to root

// in real scenarios we wil have nested elements in how can we create it in react

// <div id="parent">
//     <div id="child">
//         <p></p>
//     </div>
// </div>
//  react element is nothing but an object, when it is rendered into dom then it is converted to html
const heading1 = React.createElement("h1", { id: "head" }, "content in h1");
const heading2 = React.createElement("h2", { id: "head" }, "content in h2");
const child1 = React.createElement("div", { id: "child" }, [
  heading1,
  heading2,
]);
const child2 = React.createElement("div", { id: "child" }, [
  heading1,
  heading2,
]);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
console.log(parent);
root.render(parent);

// here you can see for a simple struction react code looks horrible imagine for real application how it will look react is not making things easy right
// that is why there exist jsx/tsx
