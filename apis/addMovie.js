import data from "../src/data.js";
import fetchMovieData from "./getMovies.js";

const addMovie = async (title, src) => {
    try {
      const response = await fetch(data.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title, src: src }),
      });
  
      if (response.ok) {
        fetchMovieData();
      } else {
        console.error('Failed to add movie:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  export default addMovie;