import { Link } from "react-router-dom"

const RecentCard = ({image, title, content, path}) => {
    return(
        <div className="d-flex align-items-center gap-2 recentCard">
            <img className="w-50" src={image}/>
            <div className="recentContent">
                <h5>{title}</h5>
                <div>
                    <p>{content}</p> 
                </div>
                <p><Link className="blackNavLink recentLink" to={path}>Ler Mais...</Link></p>
            </div>
        </div>
    )
}

export default RecentCard
