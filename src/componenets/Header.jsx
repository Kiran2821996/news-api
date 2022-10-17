import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { changeTheme } from "../context.jsx/Theme";

function Header() {
  const {ligDar,setLigDar}= useContext(changeTheme)
  return (
    <div className={ligDar?"white":"dark"}>
      <Link to={"/"}>Home</Link>
      <Link to={"/inshorts"}>Inshorts</Link>
      <Link to={"/fav"}>BookMark</Link>
      <Link to={"/about"}>About</Link>
      {ligDar ? (
        <button onClick={() => setLigDar(!ligDar)}>Dark</button>
      ) : (
        <button onClick={() => setLigDar(!ligDar)}>Light</button>
      )}
    </div>
  );
}

export default Header;
