import { useContext } from "react"
import PrincipalContext from "../contexts/PrincipalContext"

const FacebookInfo = () => {

    const { newsTitle, newsContent, newsAuthor, newsDate } = useContext(PrincipalContext)

    return(
    <div className="smallWidth mx-auto text-center mt-4 d-flex flex-column gap-2">
        <h1 className="newsTitle">{newsTitle}</h1>
        <h5 className="newsInfo">{`por ${newsAuthor} | ${newsDate}`}</h5>
        <div className="mt-5">
            <p className="articleText text-sm-left">{newsContent} {newsContent} {newsContent}</p>
            <p className="articleText text-sm-left">{newsContent} {newsContent} {newsContent}</p>
        </div>
    </div>
    )
}

export default FacebookInfo