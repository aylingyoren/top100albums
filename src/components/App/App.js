import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useFavorites } from "../../hooks/useFavorites";
import ErrorPage from "../ErrorPage";
import FavoritesPage from "../FavoritesPage";
import HomePage from "../HomePage";
import NavBar from "../NavBar";
import SearchPage from "../SearchPage";
import "./App.css";

function App() {
  const { favorites, addToFavorites, removeFromFavorites, setFavorites } =
    useFavorites();

  useEffect(() => {
    const favorite = localStorage.getItem("favorites");
    if (favorite) {
      setFavorites(JSON.parse(favorite));
    }
  }, [setFavorites]);

  return (
    <div className="app">
      <FavoritesContext.Provider
        value={[favorites, addToFavorites, removeFromFavorites, setFavorites]}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="topalbums" element={<SearchPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<ErrorPage text="Error 404: Not Found" />} />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
