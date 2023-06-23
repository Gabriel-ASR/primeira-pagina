import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './Styles/Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './pages/Layout.jsx'
import ThankYouPage from './pages/ThankYouPage.jsx'
import FacebookArticle from './pages/FacebookArticle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/thankyou" element={<ThankYouPage/>}/>
          <Route path="/vazamento-de-dados" element={<FacebookArticle/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
