import { Formater } from "@/config/helpers/formater";
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface";
import { useCast } from "@/presentation/hooks/useCast";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MovieCast from "../cast/MovieCast";

interface MovieContentProps {
  movie: CompleteMovie;
}

const MovieContent = ({ movie }: MovieContentProps) => {
  const { castQuery } = useCast(movie.id);

  if (castQuery.isLoading || !castQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center gap-5 ">
        <Text className="text-2xl font-medium ">Cargando...</Text>
        <ActivityIndicator color="purple" size={40}></ActivityIndicator>
      </View>
    );
  }

  return (
    <View className="px-5 mt-4">
      <View className="flex flex-row items-center  justify-between">
        <View className="flex flex-col items-center justify-center">
          <View className="flex flex-row gap-2 items-center">
            <Ionicons name="star" size={24} color="#FFC300" />
            <Text className="text-2xl font-black text-slate-800">
              {movie.rating}
            </Text>
          </View>
          <Text className="text-gray-600">Valoración</Text>
        </View>

        <View className="flex flex-col items-center justify-center">
          <View className="flex flex-row gap-2 items-center">
            <Ionicons name="cash" size={24} color="green" />
            <Text className="text-2xl font-black text-slate-800">
              {Formater.currency(movie.budget)}
            </Text>
          </View>
          <Text className="text-gray-600 ">Presupuesto</Text>
        </View>
      </View>

      <Text className="text-gray-600 mt-4 mb-4">
        Géneros: {movie.genres.join(", ")}
      </Text>

      <Text className="text-base  text-gray-600">Sinopsis:</Text>

      <Text className="text-lg font-normal text-justify text-slate-800">
        {movie.description}
      </Text>

      <MovieCast actor={castQuery.data} />
    </View>
  );
};

export default MovieContent;
