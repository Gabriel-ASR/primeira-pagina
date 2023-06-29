const FilterNewsInfo = ({ title, content, author }) => {

    return(
    <div className="smallWidth mx-auto text-center mt-4 d-flex flex-column gap-2">
        <h1 className="newsTitle">{title}</h1>
        <h5 className="newsInfo">{`por ${author}`}</h5>
        <div className="mt-5">
            <p className="articleText text-sm-left">{content} {content} {content}</p>
            <p className="articleText text-sm-left">{content} {content} {content}</p>
        </div>
    </div>
    )
}

export default FilterNewsInfo