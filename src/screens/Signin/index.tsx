import React from "react";
import {
    View,
    Text,
    Image,


} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';

import { styles } from './styles';



export function SignIn() {
    const navigation = useNavigation()
    // nome handler para functions que lidam com o user
    function handleSignIn() {
        navigation.navigate('Home');
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

                    <ButtonIcon
                        title="Entrar com Discord"
                        activeOpacity={0.7}
                        onPress={handleSignIn}
                    ></ButtonIcon>
                </View>

            </View>
        </Background>

    );
}