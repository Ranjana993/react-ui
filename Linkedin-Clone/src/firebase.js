import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCCxXV-92x8OEnravYB8upZA-IK98tpfCQ",
    authDomain: "linkedin-clone1-4a1bd.firebaseapp.com",
    projectId: "linkedin-clone1-4a1bd",
    storageBucket: "linkedin-clone1-4a1bd.appspot.com",
    messagingSenderId: "519615579603",
    appId: "1:519615579603:web:0918420bdfb062b4d21b26"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth}