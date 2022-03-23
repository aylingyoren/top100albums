import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import AlbumCard from "../AlbumCard";
import "./FavoritesPage.css";

function FavoritesPage() {
  const [favorites] = useContext(FavoritesContext);

  return (
    <div className="favoritespage">
      <h2 className="favoritespage__title">Favorites</h2>
      <div className="favoritespage__container">
        {favorites.map((album, i) => (
          <AlbumCard key={`fav-item-${i}`} album={album} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
