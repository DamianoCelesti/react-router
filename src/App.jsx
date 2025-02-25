import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import ListaPost from './pages/ListaPost'
// import './App.css'

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/chisiamo' element={<ChiSiamo />} />
          <Route path='/listapost' element={<ListaPost />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
