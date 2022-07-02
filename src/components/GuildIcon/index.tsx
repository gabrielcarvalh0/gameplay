import React from 'react';

import { Image } from 'react-native';
import { styles } from './styles';


export function GuildIcon() {
    const uri = 'https://cdn.icon-icons.com/icons2/3053/PNG/512/discord_macos_bigsur_icon_190238.png'
    return (
        <Image
        source={{uri}} 
        style={styles.image}
        resizeMode="cover"
         
         />
    )
}