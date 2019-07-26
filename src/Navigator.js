import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import { StyleSheet } from 'react-native'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'

// https://docs.expo.io/versions/latest/react-native/navigation/

const Navigator = createStackNavigator({
    Auth: {screen: Auth},
    Home: {screen: Agenda},
});

const MainNavigator = createAppContainer(Navigator);

export default MainNavigator


const styles = StyleSheet.create({

})