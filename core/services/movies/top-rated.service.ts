import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mapper/movie.mapper";

export const topRatedMoviesService = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/top_rated");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load top rated movies";
  }
};
