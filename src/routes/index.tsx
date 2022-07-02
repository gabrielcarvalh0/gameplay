import React from 'react';

import { theme } from '../global/styles/theme';


import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


import { AuthRoutes } from './auth.routes';
import { Background } from '../components/Background/index';


export function Routes() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: theme.colors.primary,
        },
    };
    return (
        <Background>

            <NavigationContainer  theme={ navTheme}>
                <AuthRoutes />
            </NavigationContainer>

        </Background>
    )
}