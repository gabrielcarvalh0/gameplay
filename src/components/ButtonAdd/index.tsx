import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
 import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { TouchableOpacity } from 'react-native';




export function ButtonAdd({ ...rest }: RectButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons name="plus" size={24} color={theme.colors.heading} />


        </TouchableOpacity>

    )
}