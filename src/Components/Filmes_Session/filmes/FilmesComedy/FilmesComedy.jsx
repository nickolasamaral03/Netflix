import { useEffect, useState } from 'react'
import './FilmesComedy.css'
import TudoFavorito from '../../../Favorites/TudoFavorito';

const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG

const FilmesComedy = () => {
    const [movies, setMovies] = useState([])
    const [favoritos, setFavoritos] = useState([]);

    const PegarFilmesComedia = async(url) => {
        const res = await fetch(url)
        const dados = await res.json()
        console.log(dados)
        setMovies(dados.results)
    }

    useEffect(() => {
        const comedyMovie = `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=35`
        PegarFilmesComedia(comedyMovie)
    },[])

    const addFavorito = (filme) => {
      if (!favoritos.find((fav) => fav.id === filme.id)) {
          setFavoritos([...favoritos, filme]);
      }
    };

  return (
    <>
    <h1 className='comediatitle'>Comédia</h1>
    <div className='comediafilmes'>
        {movies.map((movie) => (
        <img key={movie.id} src={imageUrl + movie.poster_path} alt="" className="movieComedy" onClick={() => addFavorito(movie)}/>
    ))}
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}

export default FilmesComedy