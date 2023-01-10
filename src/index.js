
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAro2u8Zu8iJzvtdguLHp8APh9NK9Dx-yY",
    authDomain: "iwawe-94b6c.firebaseapp.com",
    projectId: "iwawe-94b6c",
    storageBucket: "iwawe-94b6c.appspot.com",
    messagingSenderId: "787328271226",
    appId: "1:787328271226:web:063004a7b75b044f244cc3"
  };
  initializeApp(firebaseConfig);
  const db=getFirestore();
  const auth=getAuth()
//   const colRef=collection(db,'books');
     const signupForm=document.getElementById('signup');
      signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=signupForm.email.value;
    const password=signupForm.password.value;
    console.log(email);
    createUserWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
        console.log('user created',cred.user);
        signupForm.reset();
    })
    .catch((err)=>{
        console.log(err.message);
    })
})