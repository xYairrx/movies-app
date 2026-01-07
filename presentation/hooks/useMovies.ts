import { nowPlayingService } from "@/core/services/movies/now-playing.service";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ["movies", "nowPlaying"],
        queryFn: nowPlayingService,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    });

    return {
        nowPlayingQuery,
    };
};
