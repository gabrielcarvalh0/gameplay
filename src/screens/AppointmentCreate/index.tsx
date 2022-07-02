import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { CategorySelect } from '../../components/CategorySelect/index';
import { Feather } from '@expo/vector-icons';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput/index';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

export function AppointmentCreate() {
    const [category, setCategory] = useState('');



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}


        >
            <ScrollView style={styles.containerScroll}>
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
                    setCategory={setCategory}
                    categorySelected={category}
                />
                <View style={styles.form}>
                    <TouchableOpacity >
                        <View style={styles.select}>
                            {

                                // <View style={styles.image} />
                                <GuildIcon />
                            }

                            <View style={styles.selectBody}>

                                <Text style={styles.label}>
                                    Selecione um servidor
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
                            <Text style={styles.label}>
                                Dia e mês
                            </Text>
                            {/*  */}
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.label}>
                                Hora e minuto
                            </Text>
                            {/*  */}
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    :
                                </Text>
                                <SmallInput maxLength={2} />
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
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />
                 
                 <View style={styles.footer}>
                    <Button title="Agendar"/>
                 </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

