import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore();

// export default function install (Vue) {
//     Object.defineProperty(Vue.prototype, '$firebase', {
//         get() {
//             return firebaseApp
//         }
//     })
// }