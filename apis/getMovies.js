import data from "../src/data.js";

const fetchMovieData = async () => {
    try {
        const response = await fetch(data.baseUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch movies with status: ${response.status}`);
        }
        const movieData = await response.json();
        return movieData;
    } catch (err) {
        console.error('Error fetching movies:', err);
    }
}

export default fetchMovieData;
