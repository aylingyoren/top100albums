import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./SearchBar.css";

function SearchBar({ term, setTerm }) {
  const clearInput = () => setTerm("");
  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        value={term}
        placeholder="Search Albums..."
        onChange={(e) => setTerm(e.target.value)}
      />
      {term.length === 0 ? (
        <BsSearch
          role="button"
          tabIndex={0}
          size="24px"
          className="searchbar__magnifier"
        />
      ) : (
        <AiOutlineClose
          role="button"
          tabIndex={0}
          size="30px"
          className="searchbar__close"
          onClick={clearInput}
        />
      )}
    </div>
  );
}

export default SearchBar;
