import React from "react";
import "./navbar.css";

const Navbar = ({searchChange }) => {
  return (
    <div className="navbar" id="blur">
      <div className="navbarContainer">
        <div className="logoContainer">
          {/* <a href="/index.html" className="logo">
            Logo
          </a> */}
          <img src="images/logo.png" alt="logo" className="logo" />
        </div>
        <div className="listContainer">
          <ul className="ulContainer">
            <li className="listItem">
              <a href="/" className="listItemTag">
                HOME
              </a>
            </li>
            <li className="listItem">
              <a href="/" className="listItemTag">
                ABOUT
              </a>
            </li>
            <li className="listItem">
              <a href="/" className="listItemTag">
                SCHEME
              </a>
            </li>
            <li className="listItem">
              <button className="cont">Contact Us</button>
            </li>
          </ul>
        </div>
        <div className="utilityContainer">
          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={searchChange}
            />
          </div>
          <div className="langaugeButton">
            Langauge
            <div className="langaugeBox">
              <button className="langauge">Gujrati</button>
              <button className="langauge">English</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
