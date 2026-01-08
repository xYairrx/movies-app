import { nowPlayingService } from "@/core/services/movies/now-playing.service";
import { popularMoviesService } from "@/core/services/movies/popular.service";
import { topRatedMoviesService } from "@/core/services/movies/top-rated.service";
import { upcomingMoviesService } from "@/core/services/movies/upcoming.service";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingService,
    staleTime: 1000 * 60 * 60 * 24, //24 horas
  });

  const popularMoviesQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesService,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedMoviesQuery = useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: topRatedMoviesService,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const upcomingMoviesQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesService,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  };
};
