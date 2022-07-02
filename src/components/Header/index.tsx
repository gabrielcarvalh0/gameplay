import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Icon } from '@react-native-material/core';



//  ReactNode, usa-se você deseja passar para uma tipagem 
// uma propriedade de um elemento no caso o "action", para passar de mode dinamico  

type Props = {
    title: string;
    action?: ReactNode
}
type PropsView = {
    children: ReactNode
}






export function Header({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary40]}

        >
            <BorderlessButton>

                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

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

