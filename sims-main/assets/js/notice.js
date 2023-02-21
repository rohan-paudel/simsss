import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, updateProfile   } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
 
// import {  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js"




var firebaseConfig = {
  apiKey: "AIzaSyAxCdh1Ng8Uzf_ta4aNEkAv45MvT3Jb9NQ",
  authDomain: "sims-6296a.firebaseapp.com",
  projectId: "sims-6296a",
  storageBucket: "sims-6296a.appspot.com",
  messagingSenderId: "73136221786",
  appId: "1:73136221786:web:7853fa8e56fdaf3f32f263"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const date = document.getElementById("date");
const shortNotice = document.getElementById("short_notice");
const publisherName = document.getElementById("publisher");
const content = document.getElementById("content");
const btnNoticeSubmit = document.getElementById("notice_submit");

btnNoticeSubmit.onclick = async function() {
    try {
        var docRef = await addDoc(collection(db, "notice_101"), {
            date: date.value+'',
            expiry_date: "2080-12-12",
            notice_id: "00000002",
            headline: shortNotice.value+'',
            publisher_name: publisherName.value+'',
            content: content.value+''

        });


        
        try {
                                
            const data = { "to": "/topics/KAT",
                "notification" : {
                    "title": "New Notice from KEC",
                    "body" : ""+shortNotice.value
                }
        };

                fetch('https://fcm.googleapis.com/fcm/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'key = AAAAEQdCLlo:APA91bHWMGhNCYtVT__hLs8U4j6Sy_9UPfB2zDG--UDhSH82Apm1btkvErHOcE_qm7-t-_2k9vCmgHc-sLuxfConMubfN50HgA2TvFtSTNevfH6cbZTZcWRQhK5oAE73hEPfBt9zZS63'
                 },
                     body: JSON.stringify(data),
                    })
                .then((response) => response.json())
                .then((data) => {
                 
                })
                .catch((error) => {
                  
                });
           
         } catch (error) {

             
            console.error("Error Notification: "+ e);
            }

    } catch(e) {
        console.error("Error adding document: "+ e);
    }
}