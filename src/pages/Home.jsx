import Logo from '../assets/logo.png'
import MenuIcon from '../components/MenuIcon'
import CatList from '../components/CatList'
import RecentCard from '../components/RecentCard'
import Turismo from '../assets/turismo.png'
import Sports from '../assets/sports.png'
import Science from '../assets/science.png'
import Politics from '../assets/politics.png'
import Electronics from '../assets/electronics.png'
import Principal from '../components/Principal'
import Secondary from '../components/Secondary'
import PageList from '../components/PageList'
import MenuOverlay from '../components/menuOverlay'
import { useState } from 'react'

function Home() {

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
      <div className=" w-100 mt-3 mt-sm-4 mt-md-5 contentContainer">
        <div className="normalWidth m-auto d-flex gap-3 justify-content-around">
          <div className="">
            <RecentCard title="Turismo" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Turismo} path="/resort-de-luxo-inaugurado"/>
          </div>
          <div className="">
            <RecentCard title="Esportes" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Sports} path="/atleta-quebra-recorde-nacional"/>
          </div>
          <div className="">
            <RecentCard title="Política" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Politics} path="/reforma-sistema-eleitoral"/>
          </div>
          <div className="d-none d-sm-block">
            <RecentCard title="Ciência" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Science} path="/nova-especie-dinossauro"/>
          </div>
          <div className="d-none d-md-block">
            <RecentCard title="Tecnologia" content="lorem ipsum dolor sit amet, consectetur adipiscing elit" image={Electronics} path="/dispositivo-wearable-monitora-saude"/>
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

export default Home
