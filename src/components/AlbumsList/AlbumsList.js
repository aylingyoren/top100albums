import React from "react";
import { useFetch } from "../../hooks/useFetch";
import AlbumCard from "../AlbumCard/AlbumCard";
import "./AlbumsList.css";

function AlbumsList({ term }) {
  const { data, loading, error } = useFetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );

  return (
    <div className="albumslist">
      {data
        .filter(
          (album) =>
            term === "" ||
            album["im:name"].label.toLowerCase().startsWith(term.toLowerCase())
        )
        .map((album, i) => (
          <AlbumCard
            key={`album-item-${i}`}
            title={album["im:name"].label}
            img={album["im:image"][2].label}
            singer={album["im:artist"].label}
          />
        ))}
    </div>
  );
}

export default AlbumsList;
