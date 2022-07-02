import React from 'react';
import { TouchableOpacity, View, ImageBackground, Text, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons'
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader/index';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider/index';
export function AppointmentDetails() {
    const mambers = [

        {
            id: "1",
            username: "Gabriel",
            avatar_url: 'https:github.com/gabrielcarvalh0.png',
            status: 'online'
        },
        {
            id: "",
            username: "Gabriel Alves",
            avatar_url: 'https:github.com/gabrielcarvalh0.png',
            status: 'offline'
        },
    ];


    return (
        <Background>
            <View >
                <Header
                    title="Detalhes"
                    action={
                        <TouchableOpacity>
                            <Fontisto name="share" size={24} color={theme.colors.primary} />
                        </TouchableOpacity>
                    }

                />
                <ImageBackground
                    source={BannerImg}
                    style={styles.banner}
                >
                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>Lendários</Text>
                        <Text style={styles.subtitle}>É hoje que vamos chegar no challenge sem perder nenhuma partida.</Text>

                    </View>

                </ImageBackground>
                <ListHeader title="Jogadores"
                    subtitle="Total 3" />

                <FlatList
                    data={mambers}

                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Member data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.members}
                />
            </View>
        </Background>
    )
}

