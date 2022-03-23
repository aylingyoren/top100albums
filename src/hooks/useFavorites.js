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
      (el) => el?.id?.attributes["im:id"] !== id
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
