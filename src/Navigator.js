import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'
import { StyleSheet } from 'react-native'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'
import CommonStyles from './CommonStyle'
import Menu from './screens/Menu'

// https://docs.expo.io/versions/latest/react-native/navigation/

const menuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <Agenda tittle='Hoje' daysAhead={0} {...props} />,
        navigationOptions: {
            tittle: 'Hoje'
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <Agenda tittle='Amanhã' daysAhead={1} {...props} />,
        navigationOptions: {
            tittle: 'Amanhã'
        }
    },
    Week: {
        name: 'Week',
        screen: props => <Agenda tittle='Semana' daysAhead={7} {...props} />,
        navigationOptions: {
            tittle: 'Semana'
        }
    },
    Month: {
        name: 'Month',
        screen: props => 
            <Agenda title='Mês' daysAhead={30} {...props} />,
        navigationOptions: {
            title: 'Mês'
        }
    }
}

const menuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: CommonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080'
        }
    }
}

const MenuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

const Navigator = createStackNavigator({
    Auth: {
        name: 'Auth',
        screen: Auth,
        navigationOptions: { header: null }
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator,
        navigationOptions: { header: null }
    },
});

const MainNavigator = createAppContainer(Navigator);

export default MainNavigator


const styles = StyleSheet.create({

})