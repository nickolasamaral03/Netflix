import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import { Navbar } from './Principais/Navbar/Navbar'
import Iniciais from './Principais/Iniciais'
import Filmes from './Principais/Filmes/Filmes'
import Séries from './Principais/Séries/Séries'
import Favoritos from './Components/Favorites/TudoFavorito'
import Bombando from './Principais/Bombando/Bombando'
import Login from './Components/Login/Login'
import Search from './Components/Search/Search'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/Browser' Component={Iniciais}/>
        <Route path='/filmes' Component={Filmes}/>
        <Route path='/series' Component={Séries}/>
        <Route path='/Bombando' Component={Bombando}/>
        <Route path='/favoritos' Component={Favoritos}/>
        <Route path='/search' Component={Search}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


