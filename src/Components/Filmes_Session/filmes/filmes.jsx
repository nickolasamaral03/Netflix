import { useEffect, useState } from "react";
import './filmes.css'
import TudoFavorito from "../../Favorites/TudoFavorito";

const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG
// const moviesURL = import.meta.env.VITE_API;

const FilmesAção = () => {

    const [movies, setMovies] = useState([])
    const [favoritos, setFavoritos] = useState([]);

const PegarMovies = async (url) => {
    const res = await fetch(url)
    const dados = await res.json()
    
    setMovies(dados.results)
}    

useEffect(() => {
    const movieAction = `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=28`
    console.log(movieAction)
    PegarMovies(movieAction)
},[])

const addFavorito = (filme) => {
  if (!favoritos.find((fav) => fav.id === filme.id)) {
      setFavoritos([...favoritos, filme]);
  }
};

    
  return (
    <>
    <div className="tudoMovie">
    <h2 className="acao_title">Ação</h2>
    <div className="acaoPart">
      {movies.map((movie) => (
        <img key={movie.id} src={imageUrl + movie.poster_path} alt="" className="movieAction" onClick={() => addFavorito(movie)}/>
      ))}
    </div>
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}

export default FilmesAção