import { Cast } from "@/infraestructure/interfaces/cast.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import ActorCard from "./ActorCard";

interface MovieCastProps {
  actor: Cast[];
}

const MovieCast = ({ actor }: MovieCastProps) => {
  return (
    <View className="mt-4">
      <Text className="text-base  text-gray-600 mb-4">Actores:</Text>
      <FlatList
        keyExtractor={(item) => `${item.id.toString()}`}
        data={actor}
        renderItem={(item) => <ActorCard actor={item.item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieCast;
