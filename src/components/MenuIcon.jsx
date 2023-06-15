import { useState } from "react"

const MenuIcon = (props) => {

    return(
        <div className="menuBarWrapper d-sm-none d-flex flex-column justify-content-between">
            <div className={props.currentState == "open" ? "menuBar menuBar1" : "menuBar"}></div>
            <div className={props.currentState == "open" ? "menuBar menuBar2" : "menuBar"}></div>
            <div className={props.currentState == "open" ? "menuBar menuBar3" : "menuBar"}></div>
        </div>
    )
}

export default MenuIcon