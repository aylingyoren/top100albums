import { useState, useEffect, useCallback } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAlbums = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      console.log(response);
      const albumsList = await response.json();
      const album = albumsList?.feed?.entry;
      if (album) setData(album);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err?.message);
      throw new Error(err);
    }
  }, [url]);

  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  return {
    data,
    loading,
    error,
  };
}
