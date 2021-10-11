/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

const Stack: any = createNativeStackNavigator();


export default class AppNavigator extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"HomeScreen"}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="DetailScreen" component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>

        )
    }
} 