const RecentCard = (props) => {
    return(
        <div className="d-flex align-items-center gap-2 recentCard border border-danger">
            <img className="w-50" src={props.image}/>
            <div className="recentContent">
                <h5>{props.title}</h5>
                <div>
                    <p>{props.content}</p> 
                </div>
                <p>Ler Mais...</p>
            </div>
        </div>
    )
}

export default RecentCard
