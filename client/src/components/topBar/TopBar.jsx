import React from "react";
import "./topBar.scss";

import {
  Business,
  Call,
  Email,
  Facebook,
  Instagram,
  Twitter,
} from "@material-ui/icons";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="top">
        <div className="logoLinks">
          <span>
            <Facebook />
          </span>

          <span>
            <Instagram />
          </span>
          <span>
            <Twitter />
          </span>
        </div>
        <div className="welcome">
          Welcome to <span>Sheba </span>
        </div>
        <div className="logSign">
          <span>language</span>

          <div className="log">
            <span>LogIn</span>
            <span>Sign Up</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="logo">Sheba</div>
        <div className="contactCell">
          <Email />
          <span>Email Us</span>
          <span>dev.moshiurr@gmail.com</span>
        </div>
        <div className="contactCell">
          <Call />
          <span>Call Us</span>
          <span>01885355627</span>
        </div>
        <div className="contactCell">
          <Business />
          <span>Address</span>
          <span>Birganj,Dinajpur</span>
        </div>
      </div>
    </div>
  );
}
