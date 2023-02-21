import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

import { } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";




var firebaseConfig = {
    apiKey: "AIzaSyAxCdh1Ng8Uzf_ta4aNEkAv45MvT3Jb9NQ",
    authDomain: "sims-6296a.firebaseapp.com",
    projectId: "sims-6296a",
    storageBucket: "sims-6296a.appspot.com",
    messagingSenderId: "73136221786",
    appId: "1:73136221786:web:7853fa8e56fdaf3f32f263"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
var user;



const userEmail = document.getElementById("user_email");
const userPassword = document.getElementById("user_password");
const loginButton = document.getElementById("login_button");

loginButton.onclick = async function () {

    signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => {
            // Signed in 
            user = userCredential.user;

            console.log("success");
            console.log(auth.currentUser);
            localStorage.setItem("auth", JSON.stringify(auth));

            window.location = "./main.html";

        })
        .catch((error) => {
            const errorCode = error.code;
            console.log("error")
            const errorMessage = error.message;
        });
}

export { auth };




