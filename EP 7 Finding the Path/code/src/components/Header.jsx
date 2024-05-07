import { useEffect, useState } from "react";

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
      <div className="logo">NamasteFood</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
