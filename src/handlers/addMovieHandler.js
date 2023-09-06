import addMovie from '../../apis/addMovie.js';
import dom from '../dom.js';

const addMovieHandler = async () => {
    const title = dom.movieTitle.value;
    const src = dom.movieSrc.value;

    if(title.length >= 1 && src.length >= 5) {
       await addMovie(title, src);
    }

}

export default addMovieHandler;