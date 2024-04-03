const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
); // create h1 element
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root")); // react need a place to render items
root.render(heading); // add heading to root
