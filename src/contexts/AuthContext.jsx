import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { ref, set, onValue, remove } from "firebase/database";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";

// Уникальный ID устройства (сохраняется в localStorage)
const deviceId =
  localStorage.getItem("deviceId") ||
  (() => {
    const id = crypto.randomUUID();
    localStorage.setItem("deviceId", id);
    return id;
  })();

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logout = async () => {
    if (auth.currentUser) {
      const sessionRef = ref(db, `adminSessions/${auth.currentUser.uid}`);
      await remove(sessionRef); // удаляем сессию из базы
    }
    return signOut(auth);
  };

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        const sessionRef = ref(db, `adminSessions/${user.uid}`);
        // записываем deviceId как активную сессию
        set(sessionRef, deviceId);

        // если значение в сессии меняется — проверяем, наш ли это девайс
        onValue(sessionRef, (snapshot) => {
          const activeDevice = snapshot.val();
          if (activeDevice && activeDevice !== deviceId) {
            signOut(auth); // выкидываем из аккаунта
          }
        });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
