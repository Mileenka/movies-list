import data from "../src/data.js";
import loadHandler from "../src/handlers/loadHandler.js";

export const deleteMovie = async (movieId) => {
    try {
        const response = await fetch(`${data.baseUrl}/${movieId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            loadHandler();
        } else {
            console.error('Failed to delete movie:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}