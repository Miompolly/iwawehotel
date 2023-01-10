import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAro2u8Zu8iJzvtdguLHp8APh9NK9Dx-yY",
    authDomain: "iwawe-94b6c.firebaseapp.com",
    projectId: "iwawe-94b6c",
    storageBucket: "iwawe-94b6c.appspot.com",
    messagingSenderId: "787328271226",
    appId: "1:787328271226:web:063004a7b75b044f244cc3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

      document.getElementById("signup").addEventListener("click",function(){
     const  email=document.getElementById("email").value;
     const  password=document.getElementById("password").value;
 
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      
       const user = userCredential.user;
       alert("Created Successfully");
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       alert(errCode+errorMessage);
     });


 })