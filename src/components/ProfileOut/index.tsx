import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../Avatar/index';
import { useAuth } from '../../hooks/auth';
import { ModalView } from '../ModalView/index';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Button } from '../Button/index';


export function ProfileOut() {
    const { user, signOut } = useAuth();

    const [openGuildsModal, setOpenGuildsModal] = useState(false);



    function handleSignOut() {
        // Alert.alert('Logout', 'Deseja sair do Game?',

        //     [
        //         {
        //             text: 'Não',
        //             style: 'cancel'
        //         },
        //         {
        //             text: 'Sim',
        //             onPress: () => signOut()
        //         }
        //     ]
        // );
        setOpenGuildsModal(true);
    }
    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }
    return (
        <View style={styles.container}>

            <View style={styles.bodyProfile}>
                <Avatar urlImage={user.avatar} />
                <View style={styles.user}>
                    <Text style={styles.username}>
                        {user.username}
                    </Text>
                    <TouchableOpacity style={styles.btnUser}>
                        <FontAwesome5 name="user-shield" size={16} color={theme.colors.heading} />

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bodyOptions}>
                <TouchableOpacity style={styles.options}>

                    <AntDesign name="setting" size={24} color={theme.colors.heading} />
                    <Text style={styles.optionText}>Configurações </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.options}>
                    <Entypo name="help-with-circle" size={24} color={theme.colors.heading} />
                    <Text style={styles.optionText} >Ajuda </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Button onPress={handleSignOut} title='Sair'>
                    <SimpleLineIcons name="logout" size={24} color={theme.colors.heading} />
                </Button>
            </View>

            <ModalView
                visible={openGuildsModal}
                closeModal={handleCloseGuilds}
                mode={true}
            >
                <View style={styles.modalLogout}>
                    <View style={styles.divText}>
                    <Text style={styles.textLogOut}>
                        Você tem certeza que deseja sair?  
                                      
                    </Text>

                    </View>

                    <View style={styles.footerModalLogout}>
                        <View style={styles.divBtn}>
                            <Button  isLine  onPress={handleCloseGuilds} title={"Voltar"}></Button>

                        </View>

                        <View style={styles.divBtn}>

                            <Button onPress={signOut} title={"Sair"}></Button>
                        </View>

                    </View>
                </View>



            </ModalView>
        </View >


    )
}