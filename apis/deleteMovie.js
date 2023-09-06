import data from "../src/data.js";

export const deleteMovie = async (movieId) => {
    try {
        const response = await fetch(`${data.baseUrl}/${movieId}`, {
            method: 'DELETE',
        });

       if(!response.ok) {
        throw new Error('Failed');
       }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}