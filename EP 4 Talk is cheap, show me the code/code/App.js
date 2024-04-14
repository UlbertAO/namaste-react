import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo">NamasteFood</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
        alt="IMG ERR"
      />
      <h3>Pizza Hut</h3>
      <h3>40-50mins</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
