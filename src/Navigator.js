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
    Auth: {
        name: 'Auth',
        screen: Auth,
        navigationOptions: { header: null }
    },
    Home: {
        name: 'Home',
        screen: Agenda,
        navigationOptions: { header: null }
    },
});

const MainNavigator = createAppContainer(Navigator);

export default MainNavigator


const styles = StyleSheet.create({

})