import { useEffect, useState } from 'react'
import './FilmesAventura.css'
import TudoFavorito from '../../../Favorites/TudoFavorito';

const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG

const FilmesAventura = () => {
    const [filmesAventura, setFilmesAventura] = useState([])
    const [favoritos, setFavoritos] = useState([]);

    const PegarFilmesAventura = async(url) => {
        const res = await fetch(url)
        const dados = await res.json()
        setFilmesAventura(dados.results)
    }

    useEffect(() => {
        const aventuraMovies = `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=12`
        PegarFilmesAventura(aventuraMovies)
    },[])

    const addFavorito = (filme) => {
        if (!favoritos.find((fav) => fav.id === filme.id)) {
            setFavoritos([...favoritos, filme]);
        }
      };

  return (
    <>
    <h1 className='aventuraTitle'>Aventura</h1>
    <div className='filmesAventura'>
        {filmesAventura.map((aventura) => (
            <img key={aventura.id} src={imageUrl + aventura.poster_path} alt="" className="movieAventura" onClick={() => addFavorito(aventura)}/>
        ))}
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}

export default FilmesAventura