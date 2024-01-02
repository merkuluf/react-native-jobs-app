import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, color: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.menu}
                            dimenstion='60%'
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimenstion='100%'
                        />
                    ),
                    headerTitle: ''
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;