import React from 'react'
import { Routes,Route } from 'react-router-dom'
//context
import { AppContext } from './utils/MainContext'
//pages
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import CatalogMain from './components/CatalogMain'
import SingleProduct from './components/SingleProduct'
import Blog from './components/Blog'

const App = () => {
  return (
   <AppContext>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/catalogmain' element={<CatalogMain/>}/>
      <Route path="/singleproduct" element={<SingleProduct/>}/>
      <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
      </AppContext>
  
  )
}

export default App