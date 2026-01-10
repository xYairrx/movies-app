import { Cast } from "../interfaces/cast.interface";
import { CastResponse } from "../interfaces/cast.response.interface";
import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MoviesDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };

  static fromTheMovieDBToCompleteMovie = (
    movie: MoviesDBMovieResponse
  ): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      budget: movie.budget,
      genres: movie.genres.map((g) => g.name),
      duration: movie.runtime,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((c) => c.name),
    };
  };

  static fromCastResponseToCast = (actor: CastResponse): Cast => {
    return {
      id: actor.id,
      name: actor.name,
      profilePath: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png",
      adult: actor.adult,
      gender: actor.gender,
      originalName: actor.original_name,
      character: actor.character,
    };
  };
}
