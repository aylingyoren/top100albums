import { useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    item.isFav = true;
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (item, id) => {
    item.isFav = false;
    const newFavorites = favorites.filter(
      (item) => item["im:name"].label !== id
    );
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    setFavorites,
  };
}
