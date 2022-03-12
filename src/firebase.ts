import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyB7x-zwJ1g6opXzNIB0QNo_qdVR63zbZuM",
  authDomain: "capsula-do-tempo-ef63d.firebaseapp.com",
  projectId: "capsula-do-tempo-ef63d",
  storageBucket: "capsula-do-tempo-ef63d.appspot.com",
  messagingSenderId: "673841666790",
  appId: "1:673841666790:web:71939167adb42cb89b7927",
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
