import { getMovieById } from "@/core/services/movie/get-movie-by-id.service";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieQuery,
  };
};
