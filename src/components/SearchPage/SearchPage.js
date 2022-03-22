import React from "react";
import AlbumsList from "../AlbumsList/AlbumsList";
import SearchBar from "../SearchBar/SearchBar";

function SearchPage() {
  return (
    <>
      <h3>SearchPage</h3>
      <SearchBar />
      <AlbumsList />
    </>
  );
}

export default SearchPage;
