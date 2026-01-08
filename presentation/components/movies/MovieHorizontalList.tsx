import { Movie } from "@/infraestructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface MovieHorizontalListProps {
  movies: Movie[];
  title?: string;
  clasName: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  movies,
  title,
  clasName,
  loadNextPage,
}: MovieHorizontalListProps) => {

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;

    }, 200);
  }, [movies]);

  const isLoading = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndOfData =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndOfData) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();

    isLoading.current = false;

  };

  return (
    <View className={`${clasName}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-3">{title}</Text>}

      <FlatList
        keyExtractor={(item, i) => `${item.id}-${i}`}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={(item) => (
          <MoviePoster
            className="px-1"
            id={item.item.id}
            poster={item.item.poster}
            smallPoster
          />
        )}
        data={movies}
        onScroll={onScroll}
      ></FlatList>
    </View>
  );
};

export default MovieHorizontalList;
