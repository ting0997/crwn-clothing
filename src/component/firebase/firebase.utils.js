import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyBGXcx5EFR3SU_L8U7B6agu5pL7CbncJ_g",
    authDomain: "crwn-db-56634.firebaseapp.com",
    projectId: "crwn-db-56634",
    storageBucket: "crwn-db-56634.appspot.com",
    messagingSenderId: "330467028052",
    appId: "1:330467028052:web:b34f7d899167c9f93a51c1",
    measurementId: "G-Q73F8H87VM"
  }

  firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)



export default firebase