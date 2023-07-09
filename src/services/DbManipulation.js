import { collection, addDoc, query, where, getDocs, doc, getDoc } from "firebase/firestore"
import db from "./FirebaseConfig"

export let error
let email
let newsId
let userName

export default async function addUserToFirebase(data) {

    try {

        const userQuery = query(collection(db, "usuarios"), where("email", "==", data.email))
        const userResult = await getDocs(userQuery);

        userResult.forEach((doc) => {
            email = doc.data().email
        })

        if (email == data.email) {
            error = true
        }

        else {

            const toAdd = await addDoc(collection(db, "usuarios"), {
                userName: data.userName,
                email: data.email,
                passWord: data.passWord
            })

            error = false 

        }
        
    }
    
    catch (e) {
        console.log("Log de erros: ", e)
    }

}

export async function addArticleToFirebase(data) {

    try {

        const date = new Date()

        sessionStorage.setItem("data", date)

        const newsQuery = query(collection(db, "noticias"), where("title", "==", data.newsTitle))
        const userNameQuery = doc(db, "usuarios", sessionStorage.getItem("UserId"))
        const userNameResult = await getDoc(userNameQuery)
        const newsResult = await getDocs(newsQuery)

        userName = userNameResult.data().userName

        newsResult.forEach((doc) => {
            newsId = doc.data().title
        })
        
        if (newsId == data.newsTitle) {
            error = true
        }

        else {

            const toAdd = await addDoc(collection(db, "noticias"), {
                title: data.newsTitle,
                contents: data.newsContent,
                author: userName,
                category: data.newsCategory,
                publishDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            })

            error = false

        }
        
    }
    
    catch (e) {
        console.log("Log de erros: ", e)
    }

}