import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Layout from './components/Restaurant'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Locations from './components/Locations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bazeny' element={<Layout />} />
        <Route path='/bazeny/:id' element={<Gallery />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
