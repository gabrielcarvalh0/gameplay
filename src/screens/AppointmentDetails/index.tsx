import React from 'react';
import { View } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function AppointmentDetails() {
    return (
        <Background>
            <View>
                <Header title="Detalhes" />

            </View>
        </Background>
    )
}

