import addMovie from '../../apis/addMovie.js';
import dom from '../dom.js';

const addMovieHandler = () => {
    const title = dom.movieTitle.value;
    const src = dom.movieSrc.value;

    if(title.length >= 1 && src.length >= 5) {
        addMovie(title, src);
    }

}

export default addMovieHandler;