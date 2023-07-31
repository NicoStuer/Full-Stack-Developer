// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const GetData = () => {
  // eslint-disable-next-line no-unused-vars
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?t=all&apikey=5ae7211d');
        const data = await response.json();
        console.log(data)
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {movieData ? (
        <div>
          <h2>{movieData.Title}</h2>
          <p>{movieData.Plot}</p>
        </div>
      ) : (
        <p>Loading movie data...</p>
      )}
    </div>
  )
};

export default GetData;