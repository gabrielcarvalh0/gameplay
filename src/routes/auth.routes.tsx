import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/Signin';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';



const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator>
            <Screen
                options={{ headerShown: false, }}
                name="SignIn"
                component={SignIn}
            />
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