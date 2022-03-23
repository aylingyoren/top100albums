import React, { useState } from "react";
import AlbumsList from "../AlbumsList";
import SearchBar from "../SearchBar";
import "./SearchPage.css";

function SearchPage() {
  const [term, setTerm] = useState("");
  return (
    <div className="searchpage">
      <SearchBar term={term} setTerm={setTerm} />
      <AlbumsList term={term} />
    </div>
  );
}

export default SearchPage;
