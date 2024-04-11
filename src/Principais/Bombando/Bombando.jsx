import FilmesComedy from "../../Components/Filmes_Session/filmes/FilmesComedy/FilmesComedy"
import Lancamento from "../../Components/Navbar/Filmes/Lancamento/Lancamento"
import Populares from "../../Components/Navbar/Filmes/Populares/Populares"
import "./Bombando.css"

const Bombando = () => {
  return (
    <div className="bombando">
      <Lancamento/>
      <Populares/>
      <FilmesComedy/>
    </div>
  )
}

export default Bombando