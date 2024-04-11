import sino2 from '../../assets/tools_14030963.png'
import profile from '../../assets/profile_netlfix.png'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {
const [search, setSearch] = useState("")
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()

  if(!search) return 

  navigate(`/search?q=${search}`) //sempre quando a funcao ser executada sera carregada para search
  setSearch("")
}

  return (
    <div className="toda_navbar">

        <div className="netflix_logo">
             <Link to="/Browser" style={{ textDecoration: 'none'}}><h3 className='netflix'>NETFLIX</h3></Link>
        </div>
        <div className="navegacoes">
           <Link to="/Browser" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}><p className='p_inicio'>Início</p></Link>
           <Link to="/series" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}><p>Séries</p></Link>
           <Link to="/filmes" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}><p>Filmes</p></Link>
           <Link to="/Bombando" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}><p>Bombando</p></Link>
           
        </div>

        <div className="last_section">
          <form onSubmit={handleSubmit}>  {/*ação de apertar no enter e executar */}
            <input type="text" placeholder='Busque um filme' 
              onChange={(e) => setSearch(e.target.value)} //pegando valor do input
              value={search}
              className='input_search'
            />
            </form>
            <Link to="/series" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}><p className='infantil'>Infantil</p></Link>
            <img src={sino2} alt="sino" className='sino'/>
            <span className='number_random'>2</span>
            <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}><img src={profile} alt="perfil" className='perfil' /></Link>
        </div>
    </div>
  )
}





