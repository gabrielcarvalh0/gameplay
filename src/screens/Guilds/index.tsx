import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider/index';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}


export function Guilds({ handleGuildSelect }: Props) {
    // criando a const guilds
    const [guilds, setGuilds] = useState<GuildProps[]>();
    const [loading, setLoading] = useState(true);


    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds');
        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, [])
    return (
        <View style={styles.container}>
            {
                loading
                    ?
                    <Loading />
                    :
                    <FlatList
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild
                                data={item}
                                onPress={() => handleGuildSelect(item)}

                            />
                        )}
                        // sem a barrinha lateral
                        showsHorizontalScrollIndicator={false}
                        // faz um separador com o component ListDivider
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        style={styles.guilds}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                        contentContainerStyle={{ paddingBottom: 68, paddingTop: 100 }}

                    />


            }
        </View>
    )
}

