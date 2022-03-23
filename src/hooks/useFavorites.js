import { useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorite = (item) => {
    item.isFav = true;
    const newFavs = [...favorites, item];
    setFavorites(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  const removeFromFavorite = (item, id) => {
    item.isFav = false;
    const newFavs = favorites.filter((item) => item["im:name"].label !== id);
    setFavorites(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  return {
    favorites,
    addToFavorite,
    removeFromFavorite,
    setFavorites,
  };
}
