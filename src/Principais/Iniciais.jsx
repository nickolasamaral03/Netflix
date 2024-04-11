import Lancamento from "../Components/Navbar/Filmes/Lancamento/Lancamento"
import Populares from "../Components/Navbar/Filmes/Populares/Populares"
import Principal from "../Components/Navbar/Filmes/Principal"
import Espeficico from "../especifico/espeficico"

const Iniciais = () => {
  return (
    <>        
        <Espeficico/>
        <Principal/>
        <Lancamento/>
        <Populares/>
    </>
  )
}

export default Iniciais