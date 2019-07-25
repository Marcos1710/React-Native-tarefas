import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import  Navigator from './src/Navigator'
import Agenda from './src/screens/Agenda'
import Auth from './src/screens/Auth'

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Navigator)
