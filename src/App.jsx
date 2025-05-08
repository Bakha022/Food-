import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Testominial from './components/Testominial'
import Footer from './components/Footer'
import Info from './components/Info'
import Categories from './components/Categories'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Menu/>
      <Testominial/>
      <About/>
      <Info/>
      <Footer/>

    </div>
  )
}

export default App
