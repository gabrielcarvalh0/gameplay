import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/Signin';
import { AppointmentDetails } from '../screens/AppointmentDetails';



const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false, }}
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="AppointmentDetails"
                component={AppointmentDetails}
            />

        </Stack.Navigator>

    )
}