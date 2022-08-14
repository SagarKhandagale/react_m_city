import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'

import Header from './Components/Header_Footer/header'
import Footer from './Components/Header_Footer/footer'
import Home from './Components/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Home />
    <Footer />
      <Routes>
        <Route path='/' component={Home}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
