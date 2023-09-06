import data from "../src/data.js";

const editMovie = async (movieId, newMovieData) => {
  try {
    const response = await fetch(`${data.baseUrl}/${movieId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovieData),
    });

    if (!response.ok) {
      throw new Error('Failed')
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export default editMovie;
