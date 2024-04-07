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
const jsxHeading = (
  <h1 id="jsx" className="jsx" tabIndex="1">
    jsx heading
  </h1>
);
// babel(jsx=> react.createelement)=>obj=>render=>html
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//react component
// functional component
const Title = <h1>title goes here</h1>;

const HeadingComponent = () => {
  return (
    <div>
      {Title}
      {console.log("asdasd")}
      <h1>functional componnet</h1>
      <FooterComponent />
      <FooterComponent></FooterComponent>
      {FooterComponent()}
    </div>
  );
};
const FooterComponent = () => (
  <h1 className="footer" tabIndex={1}>
    footer functional componnet
  </h1>
);
root.render(<HeadingComponent />);
