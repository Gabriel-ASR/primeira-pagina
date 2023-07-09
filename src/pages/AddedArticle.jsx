import { useEffect, useState } from "react"
import AddedLayout from "../components/AddedLayout"
import { dbArticleQuery } from "../services/DbRead"
import { currentData } from "../services/DbRead"
import { useNavigate, useParams } from "react-router-dom"
import NotFound from "./NotFound"

const AddedArticle = () => {

  const [ isLoading, setIsLoading ] = useState(true)

  const { currentId } = useParams()

  const navigate = useNavigate()

   useEffect(() => {
    async function fetchData() {

      try {

        await dbArticleQuery()
        setIsLoading(false)

        if (currentData == "NotFound") {
          navigate("/notFound")
        } 
  
      }
  
      catch(e) {
        console.log("log de erros: ", e)
      }

    }

    fetchData()

  }, [])

  if (isLoading) {
    return null
  }

  if(currentData == "NotFound") {
    return(<NotFound/>)
  }

  return (
     <AddedLayout title={currentData.title} author={currentData.author} date={currentData.publishDate} content={currentData.contents}/>
  )
}

export default AddedArticle

