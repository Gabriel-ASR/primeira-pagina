import { Outlet } from "react-router-dom"
import Logo from '../assets/logo.png'
import MenuIcon from "../components/MenuIcon"
import PageList from "../components/PageList"
import MenuOverlay from "../components/menuOverlay"
import CatList from "../components/CatList"
import { useState } from "react"

const Layout = () => {

    const [menuState, setMenuState] = useState("close")

  function handleClick () {
    if (menuState == "close") {
      setMenuState("open")
    }
    else {
      setMenuState("close")
    }
    console.log("clicado!")
  }

    return(
        <>
            <div className="header">
                <div className=" normalWidth m-auto h-100 d-flex justify-content-between align-items-center">
                    <img src={Logo} className="logo"/>
                    <div onClick={() => handleClick()}>
                        <MenuIcon currentState={menuState}/>
                    </div>
                    <PageList/>
                    <MenuOverlay currentState={menuState} onNavigate={() => setMenuState("close")}/>
                </div>
            </div>
            <div className="catContainer">
                <div className="h-100 catContents m-auto normalWidth">
                <CatList/>
                </div>
            </div>

            <Outlet/>

            {/* <div className="footer text-center d-flex align-items-center justify-content-center">Copyright Primeira Página &copy; 2023</div> */}
        </>
    )
}

export default Layout