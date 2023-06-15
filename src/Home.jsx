import Logo from './assets/logo.png'
import MenuIcon from './components/MenuIcon'
import CatList from './components/CatList'
import RecentCard from './components/RecentCard'
import Turismo from './assets/turismo.png'
import Sports from './assets/sports.png'
import Science from './assets/science.png'
import Politics from './assets/politics.png'
import Electronics from './assets/electronics.png'
import Principal from './components/Principal'
import Secondary from './components/Secondary'
import PageList from './components/PageList'
import MenuOverlay from './components/menuOverlay'
import { useState } from 'react'

function App() {

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

  return (
    <>
      <div className="header">
        <div className=" normalWidth m-auto h-100 d-flex justify-content-between align-items-center">
          <img src={Logo} className="logo"/>
          <div onClick={() => handleClick()}>
            <MenuIcon currentState={menuState}/>
          </div>
          <PageList/>
            <MenuOverlay currentState={menuState}/>
        </div>
      </div>
      <div className="catContainer">
        <div className="h-100 catContents m-auto normalWidth">
          <CatList/>
        </div>
      </div>
      <div className=" w-100 mt-3 mt-sm-4 mt-md-5 contentContainer">
        <div className="normalWidth m-auto d-flex gap-3 justify-content-around">
          <div className="">
            <RecentCard title="Turismo" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Turismo}/>
          </div>
          <div className="">
            <RecentCard title="Turismo" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Sports}/>
          </div>
          <div className="">
            <RecentCard title="Turismo" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Politics}/>
          </div>
          <div className="d-none d-sm-block">
            <RecentCard title="Turismo" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Science}/>
          </div>
          <div className="d-none d-md-block">
            <RecentCard title="Turismo" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Electronics}/>
          </div>
        </div>
        <div className="mt-4 normalWidth m-auto">
          <div className="d-flex flex-column flex-sm-row gap-4 newsContainer">
            <Principal/>
            <div className="secondaryBundle mt-1 mt-sm-0">
              <div>
                  <Secondary/>
              </div>
              <div>
                  <Secondary/>
              </div>
              <div className="align-self-end">
                  <Secondary/>
              </div>
              <div className="align-self-end">
                  <Secondary/>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row gap-4 mt-4 newsContainer">
            <div className="secondaryBundle mt-1 mt-sm-0">
              <div>
                  <Secondary/>
              </div>
              <div>
                  <Secondary/>
              </div>
              <div className="align-self-end">
                  <Secondary/>
              </div>
              <div className="align-self-end">
                  <Secondary/>
              </div>
            </div>
              <Principal/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
