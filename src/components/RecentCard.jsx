const RecentCard = (props) => {
    return(
        <div className="d-flex align-items-center gap-2 recentCard border border-danger">
            <div className={props.image + " recentImage"}></div>
            <div >
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default RecentCard
