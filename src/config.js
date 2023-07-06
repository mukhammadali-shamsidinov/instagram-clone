import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD0YAOs3ij4YWudtmPp_1sFthcCghRAWI",
    authDomain: "instagram-e0641.firebaseapp.com",
    projectId: "instagram-e0641",
    storageBucket: "instagram-e0641.appspot.com",
    messagingSenderId: "1897477296",
    appId: "1:1897477296:web:3b77ea23a69e0dbaeab775",
    measurementId: "G-RY85WC6WTR"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}