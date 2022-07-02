import React, { useState } from "react";
import {
    FlatList,
    View,
    Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from '../../components/CategorySelect/index';

import { Background } from '../../components/Background';
import { styles } from './styles';
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";




export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();


    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challengi meus amigos queridos!'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1', date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challengi meus amigos queridos!'
        },

    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    function handleAppointmentsDetails() {
        navigation.navigate('AppointmentDetails');
    }
    return (
        <Background>
            <View >
                <View style={styles.header}>
                    <Profile></Profile>
                    <ButtonAdd></ButtonAdd>
                </View>

                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}

                />
                <View style={styles.content}>
                    <ListHeader title="Partidas agendadas"
                        subtitle="Total 6" />
                    {/* mais performatica lida com mais elementos em sua tela */}
                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment
                                data={item}
                                onPress={handleAppointmentsDetails}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </Background>

    );
}