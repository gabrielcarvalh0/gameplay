import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';


    
type Props = TouchableOpacityProps &{
    title: string,
    isLine?: boolean,
}

export function Button({ title, isLine, ...rest }: Props) {
    return (
        <TouchableOpacity  style={[isLine ? styles.line : styles.container]} {...rest}>
            
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity >
    )
}