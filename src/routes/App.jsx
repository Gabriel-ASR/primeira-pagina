import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom"
import { PrincipalContextProvider } from "../contexts/PrincipalContext"
import { SecondaryContextProvider } from "../contexts/SecondaryContext"
import Layout from "../pages/Layout/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import ThankYouPage from "../pages/ThankYouPage"
import FacebookArticle from "../pages/Artigos/FacebookArticle"
import AtletismoArticle from "../pages/Artigos/AtletismoArticle"
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
import MedalhaArticle from "../pages/Artigos/esportes/medalhaArticle"
import RecordeArticle from "../pages/Artigos/Esportes/RecordeArticle"
import GrandSlamArticle from "../pages/Artigos/Esportes/GrandSlamArticle"
import FeitoArticle from "../pages/Artigos/Esportes/FeitoArticle"
import CorredorArticle from "../pages/Artigos/Esportes/CorredorArticle"
import UniversidadeArticle from "../pages/Artigos/educação/universidadeArticle"
import MedalhasArticle from "../pages/Artigos/Educação/MedalhasArticle"
import MetodoArticle from "../pages/Artigos/Educação/MetodoArticle"
import BolsasArticle from "../pages/Artigos/Educação/BolsasArticle"
import InclusaoArticle from "../pages/Artigos/Educação/InclusaoArticle"
import CriptomoedasArticle from "../pages/Artigos/economia/criptomoedasArticle"
import ImpulsionarArticle from "../pages/Artigos/Economia/ImpulsionarArticle"
import AltaArticle from "../pages/Artigos/Economia/AltaArticle"
import InflacaoArticle from "../pages/Artigos/Economia/InflacaoArticle"
import PIBArticle from "../pages/Artigos/Economia/PIBArticle"
import LeiArticle from "../pages/Artigos/política/LeiArticle"
import AcordoArticle from "../pages/Artigos/Política/AcordoArticle"
import AliancaArticle from "../pages/Artigos/Política/AliancaArticle"
import TribunalArticle from "../pages/Artigos/Política/TribunalArticle"
import DeputadosArticle from "../pages/Artigos/Política/DeputadosArticle"
import AcaoArticle from "../pages/Artigos/Entretenimento/acaoArticle"
import TurneArticle from "../pages/Artigos/Entretenimento/TurneArticle"
import SuspenseArticle from "../pages/Artigos/Entretenimento/SuspenseArticle"
import SurpresaArticle from "../pages/Artigos/Entretenimento/SurpresaArticle"
import LineupArticle from "../pages/Artigos/Entretenimento/LineupArticle"
import AvancosArticle from "../pages/Artigos/saúde/avancosArticle"
import VacinaArticle from "../pages/Artigos/Saúde/VacinaArticle"
import CancerArticle from "../pages/Artigos/Saúde/CancerArticle"
import TerapiaArticle from "../pages/Artigos/Saúde/TerapiaArticle"
import MentalArticle from "../pages/Artigos/Saúde/MentalArticle.Jsx"
import SmartphoneArticle from "../pages/Artigos/Tecnologia/smartphoneArticle"
import EstrategiaArticle from "../pages/Artigos/Tecnologia/EstrategiaArticle"
import ExperienciaArticle from "../pages/Artigos/Tecnologia/ExperienciaArticle"
import StartupArticle from "../pages/Artigos/Tecnologia/StartupArticle"
import WearableArticle from "../pages/Artigos/Tecnologia/WearableArticle"
import DinossauroArticle from "../pages/Artigos/Ciência/dinossauroArticle"
import EnvelhecimentoArticle from "../pages/Artigos/Ciência/EnvelhecimentoArticle"
import EscuraArticle from "../pages/Artigos/Ciência/EscuraArticle"
import AmazonicaArticle from "../pages/Artigos/Ciência/AmazonicaArticle"
import SolarArticle from "../pages/Artigos/Ciência/SolarArticle"
import EleitoArticle from "../pages/Artigos/Turismo/EleitoArticle"
import UnescoArticle from "../pages/Artigos/Turismo/UnescoArticle"
import ExuberanteArticle from "../pages/Artigos/Turismo/ExuberanteArticle"
import AventureirosArticle from "../pages/Artigos/Turismo/AventureirosArticle"
import ResortArticle from "../pages/Artigos/Turismo/ResortArticle"
import FintechArticle from "../pages/Artigos/Negócios/FintechArticle"
import ExpansaoArticle from "../pages/Artigos/Negócios/ExpansaoArticle"
import TendenciasArticle from "../pages/Artigos/Negócios/TendenciasArticle"
import CEOArticle from "../pages/Artigos/Negócios/CEOArticle"
import ColecaoArticle from "../pages/Artigos/Moda/ColecaoArticle"
import ModeloArticle from "../pages/Artigos/Moda/ModeloArticle"
import EstacaoArticle from "../pages/Artigos/Moda/EstacaoArticle"
import EcoFriendlyArticle from "../pages/Artigos/Moda/EcoFriendlyArticle"
import DesignerArticle from "../pages/Artigos/Moda/DesignerArticle"
import OrganicosArticle from "../pages/Artigos/Alimentação/OrganicosArticle"
import ChefArticle from "../pages/Artigos/Alimentação/ChefArticle"
import FuncionaisArticle from "../pages/Artigos/Alimentação/FuncionaisArticle"
import VegetarianaArticle from "../pages/Artigos/Alimentação/VegetarianaArticle"
import GastronomicaArticle from "../pages/Artigos/Alimentação/GastronomicaArticle"
import RevolucionarArticle from "../pages/Artigos/Jogos/RevolucionarArticle"
import DesenvolvedoresArticle from "../pages/Artigos/Jogos/DesenvolvedoresArticle"
import EsportsArticle from "../pages/Artigos/Jogos/EsportsArticle"
import IndieArticle from "../pages/Artigos/Jogos/IndieArticle"
import GameplayArticle from "../pages/Artigos/Jogos/GameplayArticle"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import NewArticle from "../pages/newArticle"
import AddedArticle from "../pages/AddedArticle"
import NotFound from '../pages/NotFound'


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
        
          {/* definição das rotas da lista de categorias */}

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

          {/* definição das rotas de artigos */}

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

          <Route path="/medalha-de-ouro-no-futebol" element={<MedalhaArticle/>}/>
          <Route path="/atleta-quebra-recorde-nacional" element={<RecordeArticle/>}/>
          <Route path="/torneio-grand-slam" element={<GrandSlamArticle/>}/>
          <Route path="/feito-inedito-no-basquete-feminino" element={<FeitoArticle/>}/>
          <Route path="/recorde-sul-americano-em-maratona" element={<CorredorArticle/>}/>
          <Route path="/programa-inovador-ead" element={<UniversidadeArticle/>}/>
          <Route path="/medalhas-em-competicao-de-ciencias" element={<MedalhasArticle/>}/>
          <Route path="/metodo-de-ensino-revoluciona" element={<MetodoArticle/>}/>
          <Route path="/programa-de-bolsas-de-estudo" element={<BolsasArticle/>}/>
          <Route path="/projeto-de-inclusao-digital" element={<InclusaoArticle/>}/>
          <Route path="/mercado-atinge-novo-recorde" element={<CriptomoedasArticle/>}/>
          <Route path="/medidas-economicas-setores-produtivos" element={<ImpulsionarArticle/>}/>
          <Route path="/alta-historica-da-bolsa" element={<AltaArticle/>}/>
          <Route path="/inflacao-estavel-no-ultimo-trimestre" element={<InflacaoArticle/>}/>
          <Route path="/relatorio-economico-crescimento-pib" element={<PIBArticle/>}/>
          <Route path="/reforma-sistema-eleitoral" element={<LeiArticle/>}/>
          <Route path="/acordo-de-cooperacao-pais-vizinho" element={<AcordoArticle/>}/>
          <Route path="/partidos-fazem-alianca" element={<AliancaArticle/>}/>
          <Route path="/supremo-tribunal-constitucionalidade" element={<TribunalArticle/>}/>
          <Route path="/camara-dos-deputados-projeto-de-lei" element={<DeputadosArticle/>}/>
          <Route path="/filme-de-acao-bate-recorde" element={<AcaoArticle/>}/>
          <Route path="/artista-renomado-anuncia-turne" element={<TurneArticle/>}/>
          <Route path="/serie-de-suspense-critica" element={<SuspenseArticle/>}/>
          <Route path="/artista-nacional-album-surpresa" element={<SurpresaArticle/>}/>
          <Route path="/festival-de-musica-lineup" element={<LineupArticle/>}/>
          <Route path="/estudo-revela-avanco" element={<AvancosArticle/>}/>
          <Route path="/vacina-contra-coronavirus" element={<VacinaArticle/>}/>
          <Route path="/pesquisa-indica-relacao" element={<CancerArticle/>}/>
          <Route path="/terapia-inovadora-oferece-esperanca" element={<TerapiaArticle/>}/>
          <Route path="/estudo-revela-beneficios" element={<MentalArticle/>}/>
          <Route path="/empresa-de-tecnologia-lanca-celular" element={<SmartphoneArticle/>}/>
          <Route path="/pesquisadores-desenvolvem-ia" element={<EstrategiaArticle/>}/>
          <Route path="/avancos-na-realidade-virtual" element={<ExperienciaArticle/>}/>
          <Route path="/startups-de-inteligencia-investimento" element={<StartupArticle/>}/>
          <Route path="/dispositivo-wearable-monitora-saude" element={<WearableArticle/>}/>
          <Route path="/nova-especie-dinossauro" element={<DinossauroArticle/>}/>
          <Route path="/tecnica-inovadora-combate" element={<EnvelhecimentoArticle/>}/>
          <Route path="/avancos-materia-escura" element={<EscuraArticle/>}/>
          <Route path="/potencial-terapeutico-da-mandioca" element={<AmazonicaArticle/>}/>
          <Route path="/metodo-revolucionario-energia-solar" element={<SolarArticle/>}/>
          <Route path="/destino-nacional-e-eleito-melhor" element={<EleitoArticle/>}/>
          <Route path="/cidade-patrimonio-da-unesco" element={<UnescoArticle/>}/>
          <Route path="/atracao-turistica-experiencia-unica" element={<ExuberanteArticle/>}/>
          <Route path="/pesquisa-revela-mais-procurados" element={<AventureirosArticle/>}/>
          <Route path="/resort-de-luxo-inaugurado" element={<ResortArticle/>}/>
          <Route path="/fintech-alcanca-investimento" element={<FintechArticle/>}/>
          <Route path="/gigante-do-varejo-plataforma" element={<EleitoArticle/>}/>
          <Route path="/empresa-de-tecnologia-parceria" element={<ExpansaoArticle/>}/>
          <Route path="/estudo-revela-tendencias-consumo" element={<TendenciasArticle/>}/>
          <Route path="/ceo-renomado-assume-lideranca" element={<CEOArticle/>}/>
          <Route path="/estilista-renomado-colecao" element={<ColecaoArticle/>}/>
          <Route path="/modelo-brasileira-destaque" element={<ModeloArticle/>}/>
          <Route path="/tendencias-da-moda" element={<EstacaoArticle/>}/>
          <Route path="/marca-de-roupa-eco-friendly" element={<EcoFriendlyArticle/>}/>
          <Route path="/novo-designer-calcados" element={<DesignerArticle/>}/>
          <Route path="/estudo-revela-beneficios-organicos" element={<OrganicosArticle/>}/>
          <Route path="/chef-renomado-receitas-saudaveis" element={<ChefArticle/>}/>
          <Route path="/alimentos-funcionais-popularidade" element={<FuncionaisArticle/>}/>
          <Route path="/pesquisa-revela-impacto-dieta" element={<VegetarianaArticle/>}/>
          <Route path="/tendencia-gastronomica" element={<GastronomicaArticle/>}/>
          <Route path="/lancamento-videogame-revolucionar" element={<RevolucionarArticle/>}/>
          <Route path="/desenvolvedores-anunciam-atualizacao" element={<DesenvolvedoresArticle/>}/>
          <Route path="/competicao-esports-evento-epico" element={<EsportsArticle/>}/>
          <Route path="/jogo-indie-ganha-destaque" element={<IndieArticle/>}/>
          <Route path="/video-gameplay-aguardado" element={<GameplayArticle/>}/>

          {/* Nova Notícia */}

          <Route path="/nova-noticia" element={<NewArticle/>}/>

          <Route path="/:currentId" element={<AddedArticle/>}/>

        </Route>

        {/* Login e registro */}

        <Route path="login" element={<Login/>}/>
        <Route path="registro" element={<Register/>}/>

      </Routes>
    </BrowserRouter>
    )
}

export default App