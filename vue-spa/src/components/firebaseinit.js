import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
// exporta o metodo de autenticação e o banco de dados
export default firebaseApp.auth() && firebaseApp.firestore();