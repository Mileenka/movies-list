import dom from "../dom.js";
import fetchMovieData from '../../apis/getMovies.js';
import createMovie from '../components/createMovie.js';

const loadHandler = async () => {
    const movies = await fetchMovieData();
    

    if(movies){
      movies.forEach((movieData) => {
        const movieDom = createMovie(movieData);
        dom.movieContainer.append(movieDom);
      })
    }
  }

  export default loadHandler;
