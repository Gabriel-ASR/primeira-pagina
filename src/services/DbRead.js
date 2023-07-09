import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import db from "./FirebaseConfig";

let userId
export let loggedIn = false
export let errorMessage
let passId
export let currentData

export let articleInfo
export let articleId = []
export let articleList = []

try {

    let count = 0

    const articleResult = await getDocs(collection(db, "noticias"))
    
    articleResult.forEach((doc) => {
        articleList.push(doc.data())
        articleId.push(doc.id)
    })
    

    articleList.forEach((object) => {
        object.id = articleId[count]
        count++
    })

    }
    
catch(e) {
    console.log("Log de erros: ", e)
}    


export async function dbArticleQuery() {

    try {

        console.log("chamado!")

        const currentArticle = doc(db, "noticias", window.location.pathname.replace("/", ""))
        const currentSnap = await getDoc(currentArticle)

        if (currentSnap.data() == undefined) {
            currentData = "NotFound"

        }

        else {
            currentData = currentSnap.data()
        }

        console.log(currentData)

    }

    catch(e) {
        console.log("Log de erros: ", e)
    }

}


export default async function dbUserQuery(data) {

    try {

        const userQuery = query(collection(db, "usuarios"), where("email", "==", data.email))
        const passQuery = query(collection(db, "usuarios"), where("passWord", "==", data.password))

    
    const userResult = await getDocs(userQuery);
    const passResult = await getDocs(passQuery);

    userResult.forEach((doc) => {
        userId = doc.id
        console.log(userId)
    })

    passResult.forEach((doc) => {
        passId = doc.id
        console.log(passId)
    })

    if (userId == passId  && userId != null){
        sessionStorage.setItem("Logged", "true")
        sessionStorage.setItem("UserId", userId)
        errorMessage = null
        userId = null
        passId = null
    }

    else if (userId == null) {
        errorMessage = "Usuário não cadastrado."
        setTimeout(() => {
            errorMessage = ""
        }, 2500)
    }

    else {
        errorMessage = "Usuário ou senha incorretos."
        setTimeout(() => {
            errorMessage = ""
        }, 2500)
    }

    }

    catch(e) {
        console.log("Log de erros: ", e)
    }    

};