import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import "./AlbumCard.css";

const AlbumCard = ({ album }) => {
  const albumTitle = album["im:name"]?.label;
  const albumImageSrc = album["im:image"][2]?.label;
  const albumSinger = album["im:artist"]?.label;
  const albumId = album?.id?.attributes["im:id"];

  const [favorites, addToFavorites, removeFromFavorites] =
    useContext(FavoritesContext);

  return (
    <div className="albumcard">
      <div className="albumcard__img_group">
        <img className="albumcard__img" src={albumImageSrc} alt={albumTitle} />
        <div
          className="albumcard__heart"
          onClick={() =>
            favorites?.find((el) => el?.id?.attributes["im:id"] === albumId)
              ?.isFav
              ? removeFromFavorites(album, albumId)
              : addToFavorites(album)
          }
        >
          {favorites.find((el) => el?.id?.attributes["im:id"] === albumId) ? (
            <BsSuitHeartFill size="40px" />
          ) : (
            <BsSuitHeart size="40px" />
          )}
        </div>
      </div>
      <h4 className="albumcard__title">{albumTitle}</h4>
      <h6 className="albumcard__singer">{albumSinger}</h6>
    </div>
  );
};

export default AlbumCard;
