import { useMovies } from '@/presentation/hooks/useMovies'
import { Text } from '@react-navigation/elements'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Home = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={60} />
            </View>
        )
    }

    return (
        <View className='mt-2' style={{ paddingTop: safeArea.top }}>
            <Text className='text-3xl font-bold px-4 mb-2'>Home</Text>
        </View>
    )

}

export default Home