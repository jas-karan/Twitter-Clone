import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBeiVbS75EFwpyriWiAILUEfRpaL-j7Hk0",
    authDomain: "twitter-clone-262.firebaseapp.com",
    projectId: "twitter-clone-262",
    storageBucket: "twitter-clone-262.appspot.com",
    messagingSenderId: "1021996401890",
    appId: "1:1021996401890:web:968a8f53957e167ed1cabb",
    measurementId: "G-5WWX7D52ZS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;