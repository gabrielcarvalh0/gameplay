import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar/index';
import { useAuth } from '../../hooks/auth';
import { ModalView } from '../ModalView/index';
import { ProfileOut } from '../ProfileOut';

export function Profile() {
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
            <TouchableOpacity onPress={handleSignOut}>

                <Avatar urlImage={user.avatar} />
            </TouchableOpacity>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        {user.username}
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória!
                </Text>

            </View>
            <ModalView
                visible={openGuildsModal}
                closeModal={handleCloseGuilds}
                mode={true}
            >
                <View style={styles.signOut}>
                <ProfileOut/>
                

                </View>

            </ModalView>
        </View>

    )
}