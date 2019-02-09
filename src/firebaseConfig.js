import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const DB_CONFIG = {
  apiKey: "AIzaSyCs0lyrz4C7NNxGv_XU_JzU_3Vy9EoQTVc",
  authDomain: "myproject-fc25f.firebaseapp.com",
  databaseURL: "https://myproject-fc25f.firebaseio.com",
  projectId: "myproject-fc25f",
  storageBucket: "myproject-fc25f.appspot.com",
  messagingSenderId: "768270323670"
};

export const fire = firebase.initializeApp(DB_CONFIG);
