import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import "./AlbumCard.css";

const AlbumCard = ({ album }) => {
  const albumTitle = album["im:name"].label;
  const albumImageSrc = album["im:image"][2].label;
  const albumSinger = album["im:artist"].label;

  const [favorites, addToFavorites, removeFromFavorites] =
    useContext(FavoritesContext);

  return (
    <div className="albumcard">
      <img className="albumcard__img" src={albumImageSrc} alt={albumTitle} />
      <h4 className="albumcard__title">{albumTitle}</h4>
      <h6 className="albumcard__singer">{albumSinger}</h6>
      <button
        type="button"
        className="albumcard__btn"
        onClick={() =>
          favorites?.find((el) => el["im:name"].label === albumTitle)?.isFav
            ? removeFromFavorites(album, albumTitle)
            : addToFavorites(album)
        }
      >
        {favorites.find((el) => el["im:name"].label === albumTitle)
          ? "Remove Favorite"
          : "Add Favorite"}
      </button>
    </div>
  );
};

export default AlbumCard;
