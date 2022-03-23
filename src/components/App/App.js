import { Routes, Route } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useFavorites } from "../../hooks/useFavorites";
import FavoritesPage from "../FavoritesPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import SearchPage from "../SearchPage/SearchPage";
import "./App.css";

function App() {
  const { favorites, addToFavorites, removeFromFavorites, setFavorites } =
    useFavorites();

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
          <Route
            path="*"
            element={
              <div style={{ padding: "1rem" }}>
                <h1>Error 404: Not Found</h1>
              </div>
            }
          />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
