import { 
    Alert,
    Platform
} from 'react-native'

const server = Platform.OS === 'ios' ?
    'http://localhost:3000' : 'http://192.168.0.22:3000' // sempre fazer as alterações de acordo com o IP do servidor 

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { 
    server, 
    showError 
}