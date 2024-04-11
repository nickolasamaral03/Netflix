import { useEffect, useState } from 'react';
import './Principal.css'
import Alta from './Em_Alta/Alta';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Principal = () => {
    
    const[movies, setMovies] = useState([])

    const getMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
      
    }

    useEffect(() => {

        const allMovies = `${moviesURL}top_rated?${apiKey}`
       
        getMovies(allMovies)
    },[])

  return (
    
  <div className="todos_filmes">
      {movies.length > 0 && (
        <Alta movies={movies} />
      )}
      
    </div>
  )
}

export default Principal
