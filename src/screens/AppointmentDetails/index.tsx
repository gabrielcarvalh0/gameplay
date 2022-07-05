import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, View, ImageBackground, Text, FlatList, Alert, Share, Platform } from 'react-native';
import { Fontisto } from '@expo/vector-icons'
import * as Linking from 'expo-linking';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader/index';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider/index';
import { ButtonIcon } from '../../components/ButtonIcon';
import { AppointmentProps } from '../../components/Appointment/index';
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';

// typagem de parametros baseado nas props do appointment
type Params = {
    guildSelected: AppointmentProps
}
type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}
export function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    // criando o loading, setando ele como verdadeiro e depois que carregar a gente setea como false
    const [loading, setLoading] = useState(true);
    const route = useRoute();

    // pegando o item passado pela rota home
    const { guildSelected } = route.params as Params;



    async function fetchGuildWidget() {
        try {

            // widget é um cartao que o servidor do discord 
            // nem todas as rotas que estao disponivel 

            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
        } catch {
            Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?')
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        // sempre verivficar se esta ativado no discord
        const message = Platform.OS === 'ios' ? `Junte-se a ${guildSelected.guild.name}` : widget.instant_invite;
        if (message === null) {
            Alert.alert('Você precisa ativar no Widget do compartilhamento')
        } else {
            Share.share({
                message,
                url: widget.instant_invite
            });

        }
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }
    useEffect(() => {
        fetchGuildWidget();
    }, [])

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    guildSelected.guild.owner &&
                    <TouchableOpacity
                        onPress={handleShareInvitation}
                    >
                        <Fontisto name="share" size={24} color={theme.colors.primary} />
                    </TouchableOpacity>
                }

            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>{guildSelected.guild.name}</Text>
                    <Text style={styles.subtitle}>{guildSelected.description}</Text>

                </View>

            </ImageBackground>
            {
                loading
                    ?
                    <Loading />
                    :
                    <>
                        <ListHeader title="Jogadores"
                            subtitle={`Total ${widget.members.length}`} />
                        <FlatList
                            data={widget.members}

                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Member data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider isCentered />}
                            style={styles.members}
                        />

                    </>

            }
            {
                guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon
                        onPress={handleOpenGuild}
                        title="Entrar na partida" />
                </View>
            }
        </Background>
    )
}

