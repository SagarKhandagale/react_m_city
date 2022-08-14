import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Header from './Components/Header_Footer/header'
import Footer from './Components/Header_Footer/footer'
import Home from './Components/Home'
import SignIn from './Components/Signin'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
