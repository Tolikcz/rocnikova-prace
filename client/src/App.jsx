import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Kokot from './components/Kokot'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}></Route>
        <Route path='/bazeny/:id' element={<Kokot/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
