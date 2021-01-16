import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAN_LsOr3Y10f85jXqFrGep-kGCjB-6FAo",
    authDomain: "clothing-store-1.firebaseapp.com",
    projectId: "clothing-store-1",
    storageBucket: "clothing-store-1.appspot.com",
    messagingSenderId: "333254997959",
    appId: "1:333254997959:web:fbc1bf91d8ae1412468be2"
  }

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()


  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account '})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
  