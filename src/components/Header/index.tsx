import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';



//  ReactNode, usa-se você deseja passar para uma tipagem 
// uma propriedade de um elemento no caso o "action", para passar de mode dinamico  

type Props = {
    title: string;
    action?: ReactNode
}

export function Header({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors;

    const navigation = useNavigation();



    function handleGoBack() {
        // alert('ok');
        navigation.goBack();
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary40]}

        >
            <TouchableOpacity onPress={handleGoBack}>

                <Feather 
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </TouchableOpacity>

            <Text
                style={styles.title}

            >
                {title}
            </Text>

            <View>
                {action}
            </View>

        </LinearGradient>

    )
}

