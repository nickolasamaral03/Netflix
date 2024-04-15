import './especificomovie.css'
import PosterMovie from './poster_movie.png'

const Especificomovie = () => {
  return (
    <div>
      <div className="descricao_vingadores">
        <img src={PosterMovie} alt="" className="vingadores_post"/>
        <div className="infoVigadores">
        <h2 className='title_Vinga'>Vingadores: Ultimato</h2>
                
        <div className="fle4">
        <div className='assistir'>Assistir</div>
        <div className="maisInfo">Mais Informações</div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Especificomovie