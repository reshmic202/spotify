import React from 'react'
import Headers from './omponents/Headers'
import HeroSecton from './omponents/HeroSecton'
import Footer  from './omponents/Footer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomeScreen from './omponents/HomeScreen'
import Premium from './omponents/Premium'
import Download from './omponents/Download'


const App = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route  element={<HomeScreen />} path='/' />
        <Route  element={<Premium />} path='/premium' />
        <Route  element={<Download />} path='/Download' />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App