import { Link, Outlet, useNavigate } from "react-router-dom"
import Logo from '../../assets/logo.png'
import MenuIcon from "../../components/MenuIcon"
import PageList from "../../components/PageList"
import MenuOverlay from "../../components/menuOverlay"
import CatList from "../../components/CatList"
import { useState } from "react"

const Layout = () => {

  const navigate = useNavigate()

  const [menuState, setMenuState] = useState("close")

  function handleClick () {

    if (menuState == "close") {
      setMenuState("open")
    }
    else {
      setMenuState("close")
    }
  }

    return(
        <>
            <div className="header">
                <div className=" normalWidth m-auto h-100 d-flex justify-content-between align-items-center">
                    <Link to="/"><img src={Logo} className="logo"/></Link>

                    <div className="d-flex flex-row flex-sm-row gap-5 align-items-center">

                    {
                      
                      sessionStorage.getItem("Logged") == null
                      
                      ?
                      
                      <div className="d-flex gap-4 align-items-center" style={{fontSize: "clamp(0.9em, 0.9vw, 1.7em)"}}>
                        <Link to="login" className="navLink darkLink"><span>Login</span></Link>
                        <Link to="registro" className="navLink darkLink"><span>Registre-se</span></Link>
                      </div>

                      :
                      
                      <div className="d-flex gap-4 align-items-center newArticleContainer">
                        <Link to="/nova-noticia"><span className="newArticle rounded navLink">Nova notícia</span></Link>
                        <span onClick={() => {

                          sessionStorage.removeItem("Logged")
                          sessionStorage.removeItem("UserId")

                          navigate("/")


                        }} className="navLink darkLink logoutButton">Logout</span>
                      </div>
                        
                      }

                      <MenuOverlay currentState={menuState} onNavigate={() => setMenuState("close")}/>

                      <PageList/>
                    </div>

                    <div onClick={() => handleClick()} className="d-sm-none">
                        <MenuIcon currentState={menuState}/>
                    </div>
                </div>
            </div>
            <div className="catContainer">
                <div className="h-100 catContents m-auto normalWidth">
                <CatList/>
                </div>
            </div>

            <Outlet/>

            <div className="spacement"></div>
        </>
    )
}

export default Layout