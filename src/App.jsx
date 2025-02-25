import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'

import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import ListaPost from './pages/ListaPost'
import PostsDettaglio from './pages/PostsDettaglio'
// import './App.css'

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/chisiamo' element={<ChiSiamo />} />
          <Route path='/listapost' element={<ListaPost />} />
          <Route path='/listapost/:id' element={<PostsDettaglio />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
