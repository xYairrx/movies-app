import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
    Image,
    Pressable,
    Text,
    useWindowDimensions,
    View,
} from "react-native";

interface MovieHeaderProps {
    poster: string;
    originalTitle: string;
    title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: MovieHeaderProps) => {
    const { height } = useWindowDimensions();

    return (
        <>
            <LinearGradient
                colors={["rgba(0,0,0,0.3)", "transparent"]}
                start={[0, 0]}
                style={{
                    height: height * 0.4,
                    position: "absolute",
                    zIndex: 1,
                    width: "100%",
                }}
            />
            <View className="absolute z-50 elevation-lg top-12 left-5">
                <Pressable onPress={() => router.back()}>
                    <Ionicons
                        name="arrow-back"
                        size={30}
                        color="white"
                        className="shadow"
                    />
                </Pressable>
            </View>
            <View
                className="shadow-xl shadow-black/20"
                style={{ height: height * 0.7 }}
            >
                <View className="flex-1 rounded-b-[25px] overflow-hidden">
                    <Image
                        className="flex-1"
                        source={{
                            uri: poster,
                        }}
                        resizeMode="cover"
                    />
                </View>
            </View>

            <View className="px-5 mt-5">
                <Text className="font-normal text-gray-600">{originalTitle}</Text>
                <Text className="font-semibold  text-2xl">{title}</Text>
            </View>
        </>
    );
};

export default MovieHeader;
