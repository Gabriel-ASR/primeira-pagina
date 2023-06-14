const Principal = () => {
    return (
        <div className="d-flex flex-row align-items-center gap-2 principal">
            <div className="principalImage "></div>
            <div className="w-50 h-100 d-flex flex-column justify-content-between">
                <h1 className="principalTitle d-inline-block">CEO do Facebook publica nova declaração sobre o recente vazamento de dados</h1>
                <span className="principalInfo">por José da Silva | 26/04/2023</span>
                <div className="paragraph overflow-hidden">
                    <p className="principalInfo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio libero facere modi corporis veniam neque, quasi, minima laudantium est quisquam possimus quae ea alias repudiandae nisi harum dolores odit cumque magnam tempora nihil blanditiis voluptatem aspernatur! Eaque assumenda cum.</p>
                </div>
                <span className="principalInfo">Ler mais...</span>
            </div>
        </div>
    )
}

export default Principal