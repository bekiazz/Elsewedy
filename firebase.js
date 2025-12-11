// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcj0f-uUkT1NRoDa69WEn0CYOjmtLv7p0",
  authDomain: "elsewedy-6360f.firebaseapp.com",
  projectId: "elsewedy-6360f",
  storageBucket: "elsewedy-6360f.firebasestorage.app",
  messagingSenderId: "942337978548",
  appId: "1:942337978548:web:1a4f48a86ca17e23cca7e1",
  measurementId: "G-FE5KREW6RK"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
function editOffer(id) {
  window.location.href = `add-offer.html?id=${id}`;
}
