import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mapper/movie.mapper";

export const popularMoviesService = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/popular");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load popular movies";
  }
};
