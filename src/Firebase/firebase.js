//importing firebase app and auth

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyA-UsHrr_YoulXtZNd2JZo4KbE9z6WYXwM",
    authDomain: "signin-7a870.firebaseapp.com",
    projectId: "signin-7a870",
    storageBucket: "signin-7a870.appspot.com",
    messagingSenderId: "1063415768321",
    appId: "1:1063415768321:web:10b0eec18b6d42ace72700",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
