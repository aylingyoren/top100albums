import React from "react";
import "./AlbumCard.css";

const AlbumCard = ({ img, title, singer }) => (
  <div className="albumcard">
    <img className="albumcard__img" src={img} alt="Album thumbnail" />
    <h4 className="albumcard__title">{title}</h4>
    <h6 className="albumcard__singer">{singer}</h6>
    <button type="button" className="albumcard__btn">
      Add to favorites
    </button>
  </div>
);

export default AlbumCard;
