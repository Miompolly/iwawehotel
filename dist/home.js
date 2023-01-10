import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore,collection,addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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
  const colRef=collection(db,'booking');


const addBook=document.querySelector('.books');
addBook.addEventListener('submit',(e)=>{
    e.preventDefault();
    addDoc(colRef,{
        arrival:addBook.arival.value,
        leaving:addBook.leaving.value,
        numberofguest:addBook.nguest.value,
        where:addBook.where.value,

    })
    .then(()=>{
        addBook.reset();   
    })
})