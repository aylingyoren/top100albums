import React, { useState } from "react";
import AlbumsList from "../AlbumsList/AlbumsList";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchPage.css";

function SearchPage() {
  const [term, setTerm] = useState("");
  return (
    <div className="searchpage">
      <SearchBar term={term} setTerm={setTerm} />
      <AlbumsList />
    </div>
  );
}

export default SearchPage;
