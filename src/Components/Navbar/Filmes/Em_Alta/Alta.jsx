import PropTypes from 'prop-types'
import './Alta.css'
import { useState } from 'react'
import TudoFavorito from '../../../Favorites/TudoFavorito'


const imageUrl = import.meta.env.VITE_IMG

const Alta = (props) => {
  const {movies} = props
  const [favoritos, setFavoritos] = useState([]);

  const addFavorito = (filme) => {
    if (!favoritos.find((fav) => fav.id === filme.id)) {
        setFavoritos([...favoritos, filme]);
    }
};
 
  return (
    <>
  <div className="tudo_alta">
    <h2>Em Alta</h2>

  <div className='principais_movies' >
  
  {movies && movies.map((movie) => (
    <img key={movie.id} src={imageUrl + movie.poster_path} alt="" className='posters' onClick={() => addFavorito(movie)}/>
  ))}

  </div>
  </div> 
  {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>} 
  </>
  )
}

Alta.propTypes = {
  movies: PropTypes.array
}

export default Alta

