import { Movie } from "@/infraestructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface MovieHorizontalListProps {
  movies: Movie[];
  title?: string;
  clasName: string;
}

const MovieHorizontalList = ({
  movies,
  title,
  clasName,
}: MovieHorizontalListProps) => {
  return (
    <View className={`${clasName}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-3">{title}</Text>}

      <FlatList
        keyExtractor={(item) => `${item.id}`}
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
      ></FlatList>
    </View>
  );
};

export default MovieHorizontalList;
