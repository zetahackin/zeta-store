import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyADxV9Iabm2Xzgw_inAzoesVg5_hlj9jBs",
  authDomain: "usuarios-clientes.firebaseapp.com",
  projectId: "usuarios-clientes",
  storageBucket: "usuarios-clientes.appspot.com", // 🔥 CORREGIDO
  messagingSenderId: "782732111250",
  appId: "1:782732111250:web:4694323e11820e2382654b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
