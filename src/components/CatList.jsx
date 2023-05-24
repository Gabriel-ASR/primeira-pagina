const CatList = () => {
    return (
        <ul className="list-unstyled catList d-flex justify-content-around h-100 align-items-center">
            <li className="catItem">Esportes</li>
            <li className="catItem">Educação</li>
            <li className="catItem">Economia</li>
            <li className="catItem">Política</li>
            <li className="catItem">Entretenimento</li>
            <li className="catItem d-none d-sm-inline">Saúde</li>
            <li className="catItem d-none d-sm-inline">Tecnologia</li>
            <li className="catItem d-none d-md-inline">Ciência</li>
            <li className="catItem d-none d-md-inline">Turismo</li>
            <li className="catItem d-none d-lg-inline">Negócios</li>
            <li className="catItem d-none d-xl-inline">Moda</li>
            <li className="catItem d-none d-xl-inline">Alimentação</li>
            <li className="catItem d-none d-xxl-inline">Jogos</li>
        </ul>
    )
}

export default CatList
