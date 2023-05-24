import Logo from './assets/logo.png'
import MenuIcon from './components/MenuIcon'
import CatList from './components/CatList'
import RecentCard from './components/RecentCard'

function App() {

  return (
    <>
      <div className="header">
        <div className=" normalWidth m-auto h-100 border d-flex justify-content-between align-items-center">
          <img src={Logo} className="logo"/>
          <MenuIcon/>
        </div>
      </div>
      <div className="catContainer">
        <div className="h-100 catContents m-auto normalWidth">
          <CatList/>
        </div>
      </div>
      <div className="w-100 border border-primary mt-3 mt-sm-4 mt-md-5">
        <div>
            <RecentCard title="Turismo" content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..." image="turismo"/>
        </div>
      </div>
    </>
  )
}

export default App