import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';


import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


import { ModalView } from '../../components/ModalView';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect/index';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput/index';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Background } from '../../components/Background';

import { GuildProps } from '../../components/Guild/index';
import { Guilds } from '../Guilds';

export function AppointmentCreate() {
    // hooks
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);


    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation();

    // functions
    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }
    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }
    function handleGuildsSelect(guildSelect: GuildProps) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }
    // moda o category, atualizando o categorySelect
    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    async function handleSave() {
        const newAppointment = {
            // uuid gera id automatico
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}`,
            description
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];
        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment])
        );

        navigation.navigate('Home');

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}


        >
            <Background>


                <ScrollView>
                    <Header
                        title="Agendar partida"
                    />
                    <Text style={[styles.label,
                    {
                        marginLeft: 24,
                        marginTop: 26,
                        marginBottom: 18
                    }
                    ]}>Categoria</Text>

                    <CategorySelect
                        hasCheckBox
                        // 
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />
                    <View style={styles.form}>
                        <TouchableOpacity
                            onPress={handleOpenGuilds}
                        >
                            <View style={styles.select}>

                                {
                                    // condição para renderizar
                                    guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> : <View style={styles.image} />

                                }

                                <View style={styles.selectBody}>

                                    <Text style={styles.label}>
                                        {/* condição para renderizar */}
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>
                                </View>

                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />


                            </View>

                        </TouchableOpacity>

                        <View style={styles.field}>

                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Dia e mês
                                </Text>
                                {/*  */}
                                <View style={styles.column}>
                                    <SmallInput
                                        onChangeText={setDay}
                                        maxLength={2}
                                    />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput
                                        onChangeText={setMonth}

                                        maxLength={2} />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Hora e minuto
                                </Text>
                                {/*  */}
                                <View style={styles.column}>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setHour}

                                    />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput
                                        onChangeText={setMinute}
                                        maxLength={2}
                                    />
                                </View>

                            </View>

                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>
                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>

                        </View>

                        <TextArea
                            onChangeText={setDescription}
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <View style={styles.footer}>
                            <Button
                                onPress={handleSave}
                                title="Agendar" />
                        </View>

                    </View>
                </ScrollView>

            </Background>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds} >
                <Guilds handleGuildSelect={handleGuildsSelect} />
            </ModalView>
        </KeyboardAvoidingView>

    )
}

