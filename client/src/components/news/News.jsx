import "./news.scss";
import React from "react";

import { Person, ThumbUp, Comment } from "@material-ui/icons";

export default function News({ image, name, like, caption, text, comment }) {
  return (
    <div className="news">
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
      <div className="reactions">
        <div className="name">
          <Person />

          <span>{name}</span>
        </div>
        <div className="comment">
          <Comment />

          <span>{comment}</span>
        </div>
        <div className="like">
          <ThumbUp />
          <span>{like}</span>
        </div>
      </div>
      <div className="heading">{caption}</div>
      <div className="text">{text}</div>
      <a href="#">Learn More</a>
    </div>
  );
}
