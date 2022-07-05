import React from "react";
import {
    View,
    Text,
    Image,
    Alert,
    ActivityIndicator


} from "react-native";


import { useAuth } from "../../hooks/auth";

import { ButtonIcon } from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';



export function SignIn() {

    const { loading, signIn } = useAuth()
    // nome handler para functions que lidam com o user
    async function handleSignIn() {

        try {
            await signIn();
        } catch (error) {
            Alert.alert(error)
        }

    }
    return (
        <Background>
            <View style={styles.container} >

                <Image source={IlustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                ></Image>


                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se{`\n`}
                        e organize suas{`\n`}
                        jogatinas{`\n`}

                    </Text>

                    <Text style={styles.subTitle}>
                        Crie grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>

                    {
                        loading
                            ?
                            <ActivityIndicator color={theme.colors.primary} />
                            :
                            < ButtonIcon
                                title="Entrar com Discord"
                                activeOpacity={0.7}
                                onPress={handleSignIn}
                            />
                    }

                </View>

            </View>
        </Background>

    );
}