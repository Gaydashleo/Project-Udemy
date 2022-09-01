const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
// console.log(numberOfFilms);
// const lastMovies = prompt('Один из последних просмотренных фильмов?','')
// const rateIt = prompt('На сколько оцените его?', '');

const personalMovieDB = {
  count:numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
  };


const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);