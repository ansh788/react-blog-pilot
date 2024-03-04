import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Header from './components/header';
import Footer from './components/footer';
import PrivateRoute from './components/privateRoute';
export default function App() {
  return (
<BrowserRouter>
<Header />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route element={<PrivateRoute/>}>
    <Route path='/dashboard' element={<Dashboard/>} />
    </Route>
  </Routes>
  <Footer/>
</BrowserRouter>
  )
}
