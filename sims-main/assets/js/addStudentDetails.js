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

// console.log(JSON.parse(localStorage.getItem("auth")));


const firstName = document.getElementById("user_firstname");
const middleName = document.getElementById("user_middlename");
const lastName = document.getElementById("user_lastname");
const dob = document.getElementById("user_dob");
const gender = document.getElementById("gender");
const rollNumber = document.getElementById("user_longrollnumber");
const faculty = document.getElementById("user_faculty");
const email = document.getElementById("user_Email");
const joinedYear = document.getElementById("user_joinedyear");
const studentPhoneNumber = document.getElementById("user_phonenumber");
const guardianPhoneNumber = document.getElementById("user_Guardiancenumber");  
const submit_button = document.getElementById("submit_details");



submit_button.onclick = async function() {
   
  const file = document.querySelector("#img").files[0];
  const storage = getStorage();
  const name = rollNumber.value+".jpg"
  const storageRef = ref(storage, name);

  const metadata = {
    contentType: 'image/jpeg',
  };

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state-changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');


    },
    (error) => {

    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        try {
          var docRef = setDoc(doc(db, "students_101", email.value), {
          
            first_name: firstName.value+'',
            middle_name: middleName.value+'',
            last_name: lastName.value+'',
            dob: dob.value+'',
            roll_number: rollNumber.value+'',
            gender: gender.value+'',
            faculty: faculty.value+'',
            profile_pic: downloadURL+'',
            email: email.value+'',
            password: rollNumber.value.toLowerCase()+'',
            joined_year: joinedYear.value+'',
            student_phone_number: studentPhoneNumber.value+'',
            guardian_phone_number: guardianPhoneNumber.value+'',
          });
          
        } catch (e) {
          console.error("Error adding document: ", e);
        }

      });
    }
  )

}



    


// async function uploadImage() {
//     const storage = getStorage();
    
//     const file = document.querySelector("#img").files[0];
//     const name = +new Date() + "-" + file.name;
//     const metadata = {
//        contentType: file.type
//     };
//     const storageRef = ref(storage, name);
//     put(storageRef, file, metadata).then((snapshot)=>{
//         console.log(snapshot.storageRef.getDownloadURL()+"");
//         console.log("Success")
//     })
    
//  }


