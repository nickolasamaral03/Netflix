import { useEffect, useState } from 'react'
import  './FilmesAnimacao.css'
import TudoFavorito from '../../../Favorites/TudoFavorito';

const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG

const FilmesAnimacao = () => {
    const [animacao, setAnimacao] = useState([])
    const [favoritos, setFavoritos] = useState([]);

    const PegarFilmesAnimacao = async(url) => {
        const res = await fetch(url)
        const dados = await res.json()
    
        setAnimacao(dados.results)
    }

    useEffect(() => {
        const MoviesAnimation = `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=16`
        PegarFilmesAnimacao(MoviesAnimation)
    },[])

    const addFavorito = (filme) => {
      if (!favoritos.find((fav) => fav.id === filme.id)) {
          setFavoritos([...favoritos, filme]);
      }
    };

  return (
    <>
    <h1 className='animacaoTitle'>Animação</h1>
    <div className='todosAnimacao'>
        {animacao.map((movie) => (
        <img key={movie.id} src={imageUrl + movie.poster_path} alt="" className="movieAnimacao" onClick={() => addFavorito(movie)}/>
    ))}
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}

export default FilmesAnimacao