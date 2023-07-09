const AddedLayout = ({ title, content, author, date }) => {

    return(
    <div className="smallWidth mx-auto text-center mt-4 d-flex flex-column gap-2">
        <h1 className="newsTitle">{title}</h1>
        <h5 className="newsInfo">{`por ${author} | ${date}`}</h5>
        <div className="mt-5">
            <p className="articleText text-sm-left">{content}</p>
        </div>
    </div>
    )
}

export default AddedLayout