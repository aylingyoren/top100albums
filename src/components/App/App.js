import { Routes, Route } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useFavorites } from "../../hooks/useFavorites";
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
          <Route path="search" element={<SearchPage />} />
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
