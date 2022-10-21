import * as firebase from 'firebase/app'
import 'firebase/auth'
import {
  FIREBASE_APIKEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKEY,
  FIREBASE_MESSAGINGSENDERID,
  FIREBASE_APPID,
} from '../const'

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKEY,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID
}

firebase.initializeApp(firebaseConfig)

export default firebase