import data from "../src/data.js";

const editMovie = async (movieId, updatedTitle, updatedSrc) => {
  try {
    const response = await fetch(`${data.baseUrl}/${movieId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: updatedTitle, src: updatedSrc }),
    });

    if (response.ok) {
    } else {
      console.error('Failed to edit movie:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export default editMovie;
