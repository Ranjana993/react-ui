// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhNocCHACZO5nAeVAyUTjT5owgoUcoK_g",
    authDomain: "clone-6fa4a.firebaseapp.com",
    projectId: "clone-6fa4a",
    storageBucket: "clone-6fa4a.appspot.com",
    messagingSenderId: "1064977284322",
    appId: "1:1064977284322:web:a754672ee2996dba93b2bb",
    measurementId: "G-73ZR0PSQ0S"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// const db = getFirestore(app);

// export default db;

export {   auth }