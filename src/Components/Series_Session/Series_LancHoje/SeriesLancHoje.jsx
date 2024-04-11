import { useEffect, useState } from 'react'
import './SeriesLancHoje.css';
import TudoFavorito from '../../Favorites/TudoFavorito';

const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG

const SeriesLancHoje = () => {

    const [irrelevantes, setIrrelevantes] = useState([])
    const [favoritos, setFavoritos] = useState([]);

    const PegarIrrelevantes = async(url) => {
        const res = await fetch(url)
        const dados = await res.json()
        console.log(dados)

        setIrrelevantes(dados.results)
    }

    useEffect(() => {
        const irrelevantesSeries = `https://api.themoviedb.org/3/tv/airing_today?${apiKey}`

        PegarIrrelevantes(irrelevantesSeries)
    },[])

    const addFavorito = (filme) => {
      if (!favoritos.find((fav) => fav.id === filme.id)) {
          setFavoritos([...favoritos, filme]);
      }
  };

  return (
    <>
    <h2 className='Irrelevante_title'>Sugestões que você vai adorar</h2>
    <div className='todas_irrelevantes'>
        {irrelevantes.map((irrSeries) => (
             <img key={irrSeries.id} src={imageUrl + irrSeries.poster_path} className="tvIrrelevantes" onClick={() => addFavorito(irrSeries)}/>
        ))}
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}



export default SeriesLancHoje