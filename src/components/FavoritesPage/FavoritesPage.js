import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

function FavoritesPage() {
  const [favorites] = useContext(FavoritesContext);

  return (
    <>
      <h2>Favorites Page</h2>
      {favorites.map((fav, i) => (
        <li key={`fav-item-${i}`}>{fav["im:name"].label}</li>
      ))}
    </>
  );
}

export default FavoritesPage;
