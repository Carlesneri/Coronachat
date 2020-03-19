import firebase from 'firebase/app'
import 'firebase/database'
import {firebaseConfig} from './config'

firebase.initializeApp(firebaseConfig)

const db = firebase.database()

const dbMessages = db.ref().child('messages')

export default dbMessages


