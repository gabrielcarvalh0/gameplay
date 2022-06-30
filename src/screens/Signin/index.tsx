import React from "react";
import {
    View,
    Text,
    Image,
    

} from "react-native";
import {ButtonIcon} from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png';

import { styles } from './styles';

export function SignIn() {


    return (
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
                
                ></ButtonIcon>
            </View>

        </View>
    );
}