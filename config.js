import * as firebase from 'firebase';

require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYykAsdzAR68ShCB5Mr91ELS96x5ev5ls",
    authDomain: "wireless-library-app-f49b7.firebaseapp.com",
    databaseURL: "https://wireless-library-app-f49b7.firebaseio.com",
    projectId: "wireless-library-app-f49b7",
    storageBucket: "wireless-library-app-f49b7.appspot.com",
    messagingSenderId: "673606886329",
    appId: "1:673606886329:web:2fd4600e15c78042da8c68"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();