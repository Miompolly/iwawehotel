

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC1e4s9jwbfi40n0nzMTKXkx-VS4vIGVyE",
    authDomain: "iwawehotel-4024c.firebaseapp.com",
    projectId: "iwawehotel-4024c",
    storageBucket: "iwawehotel-4024c.appspot.com",
    messagingSenderId: "501735425804",
    appId: "1:501735425804:web:840d7ecbbcd58e569deb29"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



 document.getElementById("loggbtn").addEventListener("click",function(){
    const  loginEmail=document.getElementById("email").value;
    const  loginPassword=document.getElementById("password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {

    const user = userCredential.user;
  
    alert("Login successfully");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Login failed");
  });
})