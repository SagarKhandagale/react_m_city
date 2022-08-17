import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Header from './Components/Header_Footer/header'
import Footer from './Components/Header_Footer/footer'
import Home from './Components/Home'
import SignIn from './Components/Signin'

const MyRoutes = ({user}) => {

  console.log('MyRoutes user');
  console.log(user);

  return (
    <BrowserRouter>
      <Header user={user}/>
      <Routes>
        <Route exact path='/sign_in' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  )
}

export default MyRoutes;
