import React from 'react';

import { theme } from '../global/styles/theme';


import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


import { AppRoutes } from './app.routes';
import { Background } from '../components/Background/index';
import { useAuth } from '../hooks/auth';

import { SignIn } from '../screens/Signin'

export function Routes() {

    const { user } = useAuth();

    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: theme.colors.primary,
        },
    };
    return (
        <Background>

            <NavigationContainer theme={navTheme}>
                {user.id ?
                    <AppRoutes />
                    : <SignIn />
                }
            </NavigationContainer>

        </Background>
    )
}