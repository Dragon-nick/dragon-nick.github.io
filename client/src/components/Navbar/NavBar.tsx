import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Logo from "/profile_pic.webp";
import "./navbar.scss";

const NavBar = () => {
  const [link, setLink] = useState(1);
  const [dropDown, setDropDown] = useState(false);
  // TODO: mettere che quando clicci si chiude dropdown
  return (
    <nav className="NavBar">
      <div className="NavBar__logo">
        <Link to="/">
          <img src={Logo} alt="logo" title="Logo" />
        </Link>
      </div>
      <input
        type="checkbox"
        style={{ display: "none" }}
        id="dropdown"
        onChange={() => {
          dropDown ? setDropDown(false) : setDropDown(true);
        }}
      />
      <div className="NavBar__dropdown--logo">
        <label htmlFor="dropdown">
          <FaBars />
        </label>
      </div>
      <menu
        className={classNames(
          "NavBar__menu",
          dropDown ? "NavBar__menu--open" : undefined
        )}
      >
        <li
          className={classNames(
            "NavBar__menu-item",
            link === 1 ? "NavBar__menu-item--active" : undefined
          )}
        >
          <Link
            to="/"
            onClick={() => {
              setLink(1);
            }}
            aria-label="Home"
          >
            Home
          </Link>
        </li>
        <li
          className={classNames(
            "NavBar__menu-item",
            link === 2 ? "NavBar__menu-item--active" : undefined
          )}
        >
          <Link
            to="/about"
            onClick={() => {
              setLink(2);
            }}
            aria-label="About"
          >
            About
          </Link>
        </li>
        <li
          className={classNames(
            "NavBar__menu-item",
            link === 3 ? "NavBar__menu-item--active" : undefined
          )}
        >
          <Link
            to="/projects"
            onClick={() => {
              setLink(3);
            }}
            aria-label="Projects"
          >
            Projects
          </Link>
        </li>
        <li
          className={classNames(
            "NavBar__menu-item",
            link === 4 ? "NavBar__menu-item--active" : undefined
          )}
        >
          <Link
            to="/contact"
            onClick={() => {
              setLink(4);
            }}
            aria-label="Contact"
          >
            Contact
          </Link>
        </li>
      </menu>
    </nav>
  );
};

export default NavBar;
