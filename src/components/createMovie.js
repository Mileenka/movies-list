import deleteMovieHandler from '../handlers/deleteMovieHandler.js';
import editMovieHandler from '../handlers/editMovieHandler.js';

const createMovie = (movieData) => {

  const movie = document.createElement('div');
  movie.classList.add('movie');
  movie.id = movieData.id;

  const movieImg = document.createElement('img');
  movieImg.classList.add('movieImg');
  movieImg.src = movieData.src;
  movieImg.alt = movieData.title;

  const movieTitle = document.createElement('p');
  movieTitle.classList.add('movieTitle');
  movieTitle.innerText = movieData.title;

  const changeMovie = document.createElement('button');
  changeMovie.classList.add('change-btn');
  changeMovie.innerText = 'Change';
  changeMovie.addEventListener('click', () => {
    editMovieHandler(movieData.id);
  });

  const deleteMovie = document.createElement('button');
  deleteMovie.classList.add('delete-btn');
  deleteMovie.innerText = 'Delete';
  deleteMovie.addEventListener('click', () => {
    deleteMovieHandler(movieData.id);
  });

  movie.append(movieImg, movieTitle, changeMovie, deleteMovie);

  return movie;
};


export default createMovie