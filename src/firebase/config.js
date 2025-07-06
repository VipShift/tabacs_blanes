import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuración de Firebase - Reemplaza con tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyCF4lZinGH0CGg4WPnGiC-Wi1tDgoDATQU",
  authDomain: "estanc-roca.firebaseapp.com",
  projectId: "estanc-roca",
  storageBucket: "estanc-roca.firebasestorage.app",
  messagingSenderId: "226639438006",
  appId: "1:226639438006:web:8bca64dcc0a3263c3d4617",
  databaseURL:
    "https://estanc-roca-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
