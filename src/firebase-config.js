import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDbM28c1c3vhqglLRfeXmtu0DBfjrqlyHI",
    authDomain: "a-gifter-s-compass.firebaseapp.com",
    databaseURL: "https://a-gifter-s-compass-default-rtdb.firebaseio.com",
    projectId: "a-gifter-s-compass",
    storageBucket: "a-gifter-s-compass.firebasestorage.app",
    messagingSenderId: "774905137234",
    appId: "1:774905137234:web:4b85c34f852c9da28fb78b",
    measurementId: "G-D1PX1Z3VX3"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);