import { useEffect, useState } from 'react';
import './SeriesPop.css';
import TudoFavorito from '../../Favorites/TudoFavorito';

const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG

const SeriesPopulares = () => {

    const [tvPop, setTvPop] = useState([])
    const [favoritos, setFavoritos] = useState([]);


    const PegarPopulares = async (url) => {
        const res = await fetch (url)
        const dados = await res.json()

        setTvPop(dados.results)
    }

    useEffect(() => {
            const tvPopulares = `https://api.themoviedb.org/3/tv/popular?${apiKey}`
            PegarPopulares(tvPopulares)
    },[])

    const addFavorito = (filme) => {
      if (!favoritos.find((fav) => fav.id === filme.id)) {
          setFavoritos([...favoritos, filme]);
      }
  };

  return (
    <>
    <div className="tudoSerie">
   <h2 className='pop_title'>Populares</h2>
    <div className='popTv'>
        {tvPop.map((populares) => (
            <img key={populares.id} src={imageUrl + populares.poster_path} alt="" className="tvPopulares" onClick={() => addFavorito(populares)}/>
        ))}
    </div>
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}

export default SeriesPopulares;