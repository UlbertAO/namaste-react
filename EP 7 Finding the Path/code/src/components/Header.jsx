import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("redering header");

  useEffect(() => {
    console.log(
      "It will be called every time Header component is rendered cuz no dependecy array"
    );
  });

  useEffect(() => {
    console.log(
      "It will be called only once when Header component is first time rendered cuz  dependecy array [] empty"
    );
  }, []);

  useEffect(() => {
    console.log("It will be called when btnName changes");
  }, [btnName]);

  return (
    <header className="header">
      <a href=".">
        <div className="logo">NamasteFood</div>
      </a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
