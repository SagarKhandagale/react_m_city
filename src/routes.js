import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Header from './Components/Header_Footer/header'
import Footer from './Components/Header_Footer/footer'
import Home from './Components/Home'
import SignIn from './Components/Signin'

const MyRoutes = (props) => {

  console.log('MyRoutes user');
  console.log(props);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/sign_in' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default MyRoutes;
