import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchProvider } from './context/SearchContext.jsx'
import { PokemonProvider } from './context/PokemonContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PokemonProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </PokemonProvider>
)
