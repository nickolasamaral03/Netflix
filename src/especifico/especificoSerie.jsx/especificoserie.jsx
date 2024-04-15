import './especifico.css'
import PosterSerie from './poster_serie.png'

const Especificoserie = () => {
  return (
    <div className='tudo_breaking'>
        <img src={PosterSerie} alt="" className='breaking' />
        <div className="infoSerie">
        <h2 className='title_breaking'>Breaking Bad</h2>
        <div className="fle">
        <div className='assistir'>Assistir</div>
        <div className="maisInfo">Mais Informações</div>
        </div>
        </div>
    </div>
  )
}

export default Especificoserie