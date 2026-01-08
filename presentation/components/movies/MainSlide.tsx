import { Movie } from "@/infraestructure/interfaces/movie.interface";
import React, { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface MainSlideProps {
  movies: Movie[];
}

const MainSlide = ({ movies }: MainSlideProps) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <Carousel
        data={movies}
        renderItem={(item) => (
          <MoviePoster id={item.item.id} poster={item.item.poster} />
        )}
        ref={ref}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlide;
