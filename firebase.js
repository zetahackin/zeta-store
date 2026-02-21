// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyADxV9Iabm2Xzgw_inAzoesVg5_hlj9jBs",
  authDomain: "usuarios-clientes.firebaseapp.com",
  projectId: "usuarios-clientes",
  storageBucket: "usuarios-clientes.firebasestorage.app",
  messagingSenderId: "782732111250",
  appId: "1:782732111250:web:4694323e11820e2382654b",
  measurementId: "G-429N0JYH9F"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa servicios
export const auth = getAuth(app);        // Authentication
export const db = getFirestore(app);     // Firestore
const analytics = getAnalytics(app);     // Analytics (opcional)

