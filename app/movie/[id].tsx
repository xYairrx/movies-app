import MovieContent from "@/presentation/components/movie/MovieContent";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const Movie = () => {
    const { id } = useLocalSearchParams();

    const { movieQuery } = useMovie(+id);

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className="flex flex-1 justify-center items-center gap-5 ">
                <Text className="text-2xl font-medium ">Cargando...</Text>
                <ActivityIndicator color="purple" size={40}></ActivityIndicator>
            </View>
        );
    }

    return (
        <ScrollView>
            <MovieHeader
                originalTitle={movieQuery.data.originalTitle}
                poster={movieQuery.data.poster}
                title={movieQuery.data.title}
            />

            <MovieContent movie={movieQuery.data} />
        </ScrollView>
    );
};

export default Movie;
