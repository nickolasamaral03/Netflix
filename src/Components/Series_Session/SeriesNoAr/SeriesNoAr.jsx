import { useEffect, useState } from "react";
import "./SeriesNoAr.css";
import TudoFavorito from "../../Favorites/TudoFavorito";

const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG

const SeriesNoAr = () => {

const [seriesAr, setSeriesAr] = useState([])
const [favoritos, setFavoritos] = useState([]);

const PegarSeriesNoAr = async(url) => {
    const res = await fetch (url)
    const dados =  await res.json()

    setSeriesAr(dados.results)
}

useEffect(() => {
    const SeriesInAir = `https://api.themoviedb.org/3/tv/on_the_air?${apiKey}`

    PegarSeriesNoAr(SeriesInAir)
},[])

const addFavorito = (filme) => {
  if (!favoritos.find((fav) => fav.id === filme.id)) {
      setFavoritos([...favoritos, filme]);
  }
};

  return (
    <>
    <h2 className='lancamento'>Lançamento</h2>
    <div className='todasAsSeriesAr'>
        {seriesAr.map((noAr) => (
            <img key={noAr.id} src={imageUrl + noAr.poster_path} alt="" className="tvNoArAgora" onClick={() => addFavorito(noAr)}/>
        ))}
    </div>
    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
    </>
  )
}

export default SeriesNoAr