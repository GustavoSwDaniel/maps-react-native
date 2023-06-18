import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Maps from '../map/Maps';

function Navigation() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Maps} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;