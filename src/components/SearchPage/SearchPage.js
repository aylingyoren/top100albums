import React from "react";
import AlbumsList from "../AlbumsList/AlbumsList";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchpage">
      <h3>SearchPage</h3>
      <SearchBar />
      <AlbumsList />
    </div>
  );
}

export default SearchPage;
