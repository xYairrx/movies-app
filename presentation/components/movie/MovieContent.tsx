import { Formater } from '@/config/helpers/formater';
import { CompleteMovie } from '@/infraestructure/interfaces/movie.interface';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface MovieContentProps {
    movie: CompleteMovie;
}

const MovieContent = ({ movie }: MovieContentProps) => {
    return (
        <View className='px-5 mt-2'>
            <View className='flex flex-row items-center gap-4 justify-between'>
                <View className='flex flex-col items-center justify-center'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Ionicons name='star' size={24} color='#FFC300' />
                        <Text className='text-4xl font-black text-slate-800'>{movie.rating}</Text>
                    </View>
                    <Text className='text-gray-600'>Valoración</Text>
                </View>

                <View className='flex flex-col items-center justify-center'>
                    <View className='flex flex-row gap-2 items-center'>
                        <Ionicons name='cash' size={24} color='green' />
                        <Text className='text-4xl font-black text-slate-800'>{Formater.currency(movie.budget)}</Text>
                    </View>
                    <Text className='text-gray-600 '>Presupuesto</Text>
                </View>
            </View>

            <Text className='text-gray-600 mt-2 mb-4'>Géneros: {movie.genres.join(', ')}</Text>

            <Text className='text-base  text-gray-600'>Sinopsis:</Text>

            <Text className='text-lg font-medium text-slate-800'>{movie.description}</Text>





        </View >
    );
};

export default MovieContent;