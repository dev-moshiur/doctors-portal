import React from "react";

import "./navBar.scss";

import { Search, Person } from "@material-ui/icons";

export default function NavBar({ setsearch }) {
  return (
    <div className="navBar">
      <div className="links">
        <a href="#home">Home </a>
        <a href="#services">Services</a>
        <a href="#team">Doctors</a>
        <a href="#blog">News</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="icons">
        <span onClick={() => setsearch((presearch) => !presearch)}>
          <Search />
        </span>
        <span>
          <Person />
        </span>
      </div>
    </div>
  );
}
