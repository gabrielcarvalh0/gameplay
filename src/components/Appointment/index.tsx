import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';


import { GuildIcon } from '../GuildIcon';
import { GuildProps } from '../Guild';

import { categories } from '../../utils/category';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;

}
type Props = TouchableOpacityProps & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category);



    const { owner } = data.guild;
    const { primary, on, secondary50, secondary60 } = theme.colors;

    return (
        <TouchableOpacity activeOpacity={1}  {...rest}>
            <View style={styles.container}>
                <LinearGradient
                    style={styles.guildIconContainer}
                    colors={[secondary50, secondary60]}
                >

                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
                </LinearGradient>

                <View style={styles.content}>
                    {/* view header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {
                                category != undefined ? category.title : 'Nada'
                            }
                        </Text>
                    </View>
                    {/* footer */}
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>

                        {/* view playrs info */}
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? primary : on} />
                            <Text style={[styles.player,
                            { color: owner ? primary : on }]}>

                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                            {/* fim playersInfo */}
                        </View>
                        {/* fim footer */}
                    </View>
                </View>
            </View>

        </TouchableOpacity>

    )
}