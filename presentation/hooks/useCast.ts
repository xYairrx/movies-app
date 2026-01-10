import { getCastOfMovie } from "@/core/services/cast/get-cast-movie.service";
import { useQuery } from "@tanstack/react-query";

export const useCast = (id: number) => {
  const castQuery = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getCastOfMovie(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    castQuery,
  };
};
