import { ApiMovies, Movie } from '@/models';

export const MoviesAdapter = (movie: ApiMovies): Movie => {

  return {
    rank: movie.rank,
    title: movie.title,
    thumbnail: movie.thumbnail,
    rating: movie.rating,
    id: movie.id,
    year: movie.year,
    image: movie.image,
    description: movie.description,
    trailer: movie.trailer,
    genre: movie.genre,
    director: movie.director,
    writers: movie.writers,
    imdbid: movie.imdbid
  };
};
