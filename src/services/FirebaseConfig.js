
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHdQGU-j5IsL7lZ3YB2VNdfpttLVdxHsk",
  authDomain: "primeira-pagina-dadde.firebaseapp.com",
  projectId: "primeira-pagina-dadde",
  storageBucket: "primeira-pagina-dadde.appspot.com",
  messagingSenderId: "98620732957",
  appId: "1:98620732957:web:2d31fbf045ae9da17638f4"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db


