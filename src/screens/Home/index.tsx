import React, { useState, useCallback } from "react";
import {
    FlatList,
    View,
    Text,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


import { COLLECTION_APPOINTMENTS } from "../../configs/database";

// STYLES
import { styles } from './styles';

// COMPONENTS
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from '../../components/CategorySelect/index';
import { Background } from '../../components/Background';
import { ListHeader } from "../../components/ListHeader";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Loading } from "../../components/Loading";



export function Home() {
    const [category, setCategory] = useState('');

    const [loading, setLoading] = useState(true);

    // apointements recebe um state com uma typagem para suas propriedades 
    // useState recebe uma typagem de um vetor mas que noinicio começa com um vetor vazio
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation = useNavigation();



    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentsDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', {guildSelected});
    }


    function handleAppointmentsCreate() {
        navigation.navigate('AppointmentCreate');
    }

    // function para carregar os agendamentos e filtrar
    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        // usamos a typagem para identificar o typo da variavel
        // usa-se o [] para simbolizar um vetor, que são varios itens 
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            // filtrando pela categoria
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage);
        }
        setLoading(false);
    }

    // useEfect memoriza estado 
    // quando a tela home tiver foco então ele recarrega
    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

    return (
        <Background>
            <View style={styles.header}>
                {/* component de perfil do usuario */}
                <Profile />
                {/* botão para adcionar  */}
                <ButtonAdd onPress={handleAppointmentsCreate} />
            </View>
            {/* componente de escolha de categoria, recebe-se uma função como parametro, para pegar o id da categoria */}
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {

                loading
                    ? <Loading />
                    :
                    <>

                        {/* componente de cabeçalho */}
                        < ListHeader title="Partidas agendadas"
                            subtitle={`Total ${appointments.length}`} />
                        {/* mais performatica lida com mais elementos em sua tela */}


                        <FlatList
                            // passa-se o objeto como um parametro para o "data", que é nativo do FlatList
                            data={appointments}
                            // extrai a chave passando para cada item, o seu id 
                            keyExtractor={item => item.id}

                            // renderiza os itens da lista criando um component para cada 
                            renderItem={({ item }) => (
                                <Appointment
                                    // data é uma typagem, passando um item como parametro do component
                                    data={item}
                                    // function para navegar até a screen de Detalhes do item
                                    onPress={() => handleAppointmentsDetails(item)}
                                />
                            )}
                            // item para separar os component da lista
                            ItemSeparatorComponent={() => <ListDivider />}

                            // deixa um respiro no final da lista com um paddingBottom
                            // usa-se o contentContainerStyle para por um style na lista
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.matches}
                            //    mostra o scrool na horizontal, boolean
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
            }

        </Background >

    );
}