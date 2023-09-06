import {deleteMovie as delMovie}  from '../../apis/deleteMovie.js' ;
import editMovie from '../../apis/editMovie.js';
import dom from '../dom.js';

const createMovie = (movieData) => {
    const movieContainer = document.getElementById('movie-container');
  
    const movie = document.createElement('div');
    movie.classList.add('movie');
    movie.dataset.id = movieData.id;
  
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
    changeMovie.addEventListener('click', (e) => {
      e.preventDefault();
      const title = dom.movieTitle.value;
    const src = dom.movieSrc.value;
      editMovie(movieData.id, title, src);
    });
  
    const deleteMovie = document.createElement('button');
    deleteMovie.classList.add('delete-btn');
    deleteMovie.innerText = 'Delete';
    deleteMovie.addEventListener('click', () => {
      delMovie(movieData.id);
    });
  
    movie.append(movieImg, movieTitle, changeMovie, deleteMovie);
    movieContainer.appendChild(movie);
  
    return movie;
  };
  

  export default createMovie