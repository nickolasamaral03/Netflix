import { useEffect, useState } from "react"
import "./Search.css"
import { useSearchParams } from "react-router-dom"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG;

const Search = () => {
const [searchParams] = useSearchParams()

const [movies, setMovies] = useState([])
const query = searchParams.get("q") //pegando o q da URL

const getSearchMovies = async(url) => {
    const res = await fetch(url)
    const dados = await res.json()
    setMovies(dados.results)
}

useEffect(() => {
    const searchWithURL = `${searchURL}?${apiKey}&query=${query}`;
    

    getSearchMovies(searchWithURL)
},[query])


  return (
    <div className="tudo_search">
    <h2 className="title">
        Resultados para: <span className="query_text">{query}</span>
    </h2>
<div className="filmes_pesquisados">
    {movies.length === 0 && <p className="carregando">Certifique-se que escreveu corretamente</p>}
    {movies && movies.map((movie) => 
            <img 
            key={movie.id} 
            src={imageUrl + movie.poster_path} 
            className="movie_search" 
            />
        )}
    </div>

    </div>
  )
}

export default Search