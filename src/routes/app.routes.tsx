import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';



const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator>

            <Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
            <Screen
                options={{ headerShown: false }}
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                options={{ headerShown: false }}
                name="AppointmentCreate"
                component={AppointmentCreate}
            />

        </Navigator>

    )
}