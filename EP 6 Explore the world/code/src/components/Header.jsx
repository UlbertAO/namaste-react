import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("redering header");
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
