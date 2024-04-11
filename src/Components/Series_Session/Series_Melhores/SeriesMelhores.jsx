import { useEffect, useState } from 'react'
import './SeriesMelhores.css';
import TudoFavorito from '../../Favorites/TudoFavorito';

const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG

const SeriesMelhores = () => {

    const [melhores, setMelhores] = useState([])
    const [favoritos, setFavoritos] = useState([]);

    const pegarMelhores = async(url) => {
        const res = await fetch(url)
        const dados = await res.json()

        setMelhores(dados.results)
    }

    useEffect(() => {
        const seriesBest = `https://api.themoviedb.org/3/tv/top_rated?${apiKey}`
        pegarMelhores(seriesBest)
    },[])
 
    const addFavorito = (filme) => {
        if (!favoritos.find((fav) => fav.id === filme.id)) {
            setFavoritos([...favoritos, filme]);
        }
    };
    
  return (
    <>
    <h2 className='popularesNaNetflix'>Séries aclamadas pela crítica</h2>
    <div className='todasAsMelhores'>
        {melhores.map((melhorSeries) => (
            <img key={melhorSeries.id} src={imageUrl + melhorSeries.poster_path} alt="" className="tvMelhores" onClick={() => addFavorito(melhorSeries)}/>
        ))}
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}

export default SeriesMelhores