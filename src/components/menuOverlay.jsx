const MenuOverlay = (props) => {
    return(
    <div className={props.currentState == "close" ? "position-absolute menuOverlay d-sm-none" : "position-absolute menuOverlay openOverlay d-sm-none"}>
        <ul className="w-100 p-0 d-flex flex-column">
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
    </div>
    )
}

export default MenuOverlay