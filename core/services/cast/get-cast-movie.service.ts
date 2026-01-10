import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infraestructure/interfaces/cast.interface";
import { MovieDBCastResponse } from "@/infraestructure/interfaces/cast.response.interface";
import { MovieMapper } from "@/infraestructure/mapper/movie.mapper";

export const getCastOfMovie = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieDBCastResponse>(
      `/${movieId}/credits`
    );

    return data.cast.map(MovieMapper.fromCastResponseToCast);
  } catch (error) {
    console.log(error);
    throw "Cannot laod cast of movies";
  }
};
