import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mapper/movie.mapper";

interface Options {
  page: number;
  limit?: number;
}

export const topRatedMoviesService = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>(`/top_rated`, {
      params: {
        page,
        limit,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load top rated movies";
  }
};
