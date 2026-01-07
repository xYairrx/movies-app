import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mapper/movie.mapper";

export const nowPlayingService = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/now_playing");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
