import { useEffect, useState } from 'react'
import './Populares.css'
import TudoFavorito from '../../../Favorites/TudoFavorito';
const imageUrl = import.meta.env.VITE_IMG

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Populares = () => {

    const [populares, setPopulares] = useState([])
    const [favoritos, setFavoritos] = useState([]);

    const getPopulares = async(url) => {
        const res = await fetch(url)
        const data = await res.json()

        setPopulares(data.results)
    }

    useEffect(() => {

        const MoviePopulares = `${moviesURL}popular?${apiKey}`
        getPopulares(MoviePopulares)

    },[])

    const addFavorito = (filme) => {
      if (!favoritos.find((fav) => fav.id === filme.id)) {
          setFavoritos([...favoritos, filme]);
      }
  };

  return (
    <>
    <h1 className='Populares_title'>Populares</h1>
    <div className='todos_populares'>
        {populares.map((popular) => 
        <img src={imageUrl + popular.poster_path} key={popular.id} alt="" className='one_popular' onClick={() => addFavorito(popular)}/>
        )}
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}

export default Populares