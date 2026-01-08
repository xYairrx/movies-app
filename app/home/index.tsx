import MainSlide from "@/presentation/components/movies/MainSlide";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const safeArea = useSafeAreaInsets();
  const {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={60} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View
        className="mt-2"
        style={{ paddingTop: safeArea.top, paddingBottom: safeArea.bottom }}
      >
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

        <MainSlide movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList
          movies={popularMoviesQuery.data ?? []}
          title="Populares"
          clasName="mb-5"
        />

        <MovieHorizontalList
          movies={topRatedMoviesQuery.data?.pages.flat() ?? []}
          title="Más valoradas"
          clasName="mb-5"
          loadNextPage={topRatedMoviesQuery.fetchNextPage}
        />

        <MovieHorizontalList
          movies={upcomingMoviesQuery.data ?? []}
          title="Próximamente"
          clasName="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default Home;
