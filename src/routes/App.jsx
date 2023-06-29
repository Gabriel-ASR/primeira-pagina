import { Route, BrowserRouter, Routes } from "react-router-dom"
import { PrincipalContextProvider } from "../contexts/PrincipalContext"
import { SecondaryContextProvider } from "../contexts/SecondaryContext"
import Layout from "../pages/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import ThankYouPage from "../pages/ThankYouPage"
import FacebookArticle from "../pages/FacebookArticle"
import AtletismoArticle from "../pages/AtletismoArticle"
import SportsFilter from "../pages/SportsFilter"
import EducationFilter from "../pages/EducationFilter"
import EconomyFilter from "../pages/EconomyFilter"
import PoliticsFilter from "../pages/PoliticsFilter"
import EntertainmentFilter from "../pages/EntertainmentFilter"
import HealthFilter from "../pages/HealthFilter"
import TechnologyFilter from "../pages/TechnologyFilter"
import ScienceFilter from "../pages/ScienceFilter"
import TourismFilter from "../pages/TourismFilter"
import BusinessFilter from "../pages/BusinessFilter"
import FashionFilter from "../pages/FashionFilter"
import FoodFilter from "../pages/FoodFilter"
import GamesFilter from "../pages/GamesFilter"


const App = () => {
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={
          <PrincipalContextProvider>
            <SecondaryContextProvider>
              <Home/>
            </SecondaryContextProvider>
          </PrincipalContextProvider>
          }/>
          
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/thankyou" element={<ThankYouPage/>}/>

          <Route path="/vazamento-de-dados" element={
            <PrincipalContextProvider>
              <FacebookArticle/>
            </PrincipalContextProvider>
          }/>

          <Route path="/brasil-ganha-ouro-em-atletismo" element={
          <SecondaryContextProvider>
            <AtletismoArticle/>
          </SecondaryContextProvider>
          }/>

          <Route path="/esportes-lista-noticias" element={<SportsFilter/>}/>
          <Route path="/educacao-lista-noticias" element={<EducationFilter/>}/>
          <Route path="/economia-lista-noticias" element={<EconomyFilter/>}/>
          <Route path="/politica-lista-noticias" element={<PoliticsFilter/>}/>
          <Route path="/entretenimento-lista-noticias" element={<EntertainmentFilter/>}/>
          <Route path="/saude-lista-noticias" element={<HealthFilter/>}/>
          <Route path="/tecnologia-lista-noticias" element={<TechnologyFilter/>}/>
          <Route path="/ciencia-lista-noticias" element={<ScienceFilter/>}/>
          <Route path="/turismo-lista-noticias" element={<TourismFilter/>}/>
          <Route path="/negocios-lista-noticias" element={<BusinessFilter/>}/>
          <Route path="/moda-lista-noticias" element={<FashionFilter/>}/>
          <Route path="/alimentacao-lista-noticias" element={<FoodFilter/>}/>
          <Route path="/jogos-lista-noticias" element={<GamesFilter/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App