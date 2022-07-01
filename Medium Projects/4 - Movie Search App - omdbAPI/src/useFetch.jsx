import React, { useState, useContext, useEffect } from 'react';

// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.VITE_REACT_APP_MOVIE_API_KEY}
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_REACT_APP_MOVIE_API_KEY
}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      const { Search, Response, Error } = data;

      if (Response === 'True') {
        setData(Search || data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: Error });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError({ show: true, msg: '' });
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { error, isLoading, data };
};

export default useFetch;
