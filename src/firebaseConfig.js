// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD_sWn_gBUpAwSW1TPB-ZYztQDC216lC1Q",
	authDomain: "cafe-ce919.firebaseapp.com",
	projectId: "cafe-ce919",
	storageBucket: "cafe-ce919.appspot.com",
	messagingSenderId: "270032984883",
	appId: "1:270032984883:web:3dbee70910a0147f673c46",
	measurementId: "G-C394CHG7Z6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
