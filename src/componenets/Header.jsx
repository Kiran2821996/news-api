import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { changeTheme } from "../context.jsx/Theme";
import { searchedData } from "../context.jsx/Search";
import "../style.css/Header.css";

function Header() {
  const { ligDar, setLigDar } = useContext(changeTheme);
  const { search, setSearch } = useContext(searchedData);

  return (
    <div className={ligDar ? "mainHeader" : "mainHeaderdr"}>
      <div className={ligDar ? "white" : "dark"}>
        <div className="newicon">
          <i class="fa-solid fa-newspaper"></i>
           Daily Shorts
        </div>
        <div className="top-toggle">
          {ligDar ? (
            // <button >Dark</button>
            <i
              class="fa-solid fa-moon mo"
              onClick={() => setLigDar(!ligDar)}
            ></i>
          ) : (
            <i
              class="fa-solid fa-sun su"
              onClick={() => setLigDar(!ligDar)}
            ></i>
            // <button >Light</button>
          )}
        </div>
        <div className="middle-search">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="low-links">
          <div className="home-link">
            <Link className={ligDar ? "wh" : "dr"} to={"/"}>
              Home
            </Link>
          </div>
          <div className="inshort-link">
            <Link className={ligDar ? "wh" : "dr"} to={"/inshorts"}>
              Inshorts
            </Link>
          </div>
          <div className="bookmark-link">
            <Link className={ligDar ? "wh" : "dr"} to={"/fav"}>
              BookMark
            </Link>
          </div>
          <div className="about-link">
            <Link className={ligDar ? "wh" : "dr"} to={"/about"}>
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
