import editMovie from "../../apis/editMovie.js";
import dom from '../dom.js';

const editMovieHandler = async (id) => {
    const title = dom.movieTitle.value;
    const src = dom.movieSrc.value;
    const element = document.getElementById(id);
    element.querySelector('img').src = src;
    element.querySelector('img').alt = title;
    element.querySelector('p').innerText = title;
    await editMovie(id, {title, src});
}

export default editMovieHandler;