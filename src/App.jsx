import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonPage from './pages/PokemonPage.jsx'
import MainPage from './pages/MainPage.jsx'

function App () {
  return (
    <BrowserRouter>
      <MainPage />
      <Routes>
        <Route path='/:id' element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
