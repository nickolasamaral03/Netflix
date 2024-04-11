import { useEffect, useState } from 'react';
import './Lancamento.css';
import TudoFavorito from '../../../Favorites/TudoFavorito';

const imageUrl = import.meta.env.VITE_IMG;

const Lancamento = () => {
    const [lancamentos, setLancamentos] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const getLancamentos = async (url) => {
        try {
            const res = await fetch(url);
            const dados = await res.json();
            setLancamentos(dados.results);
        } catch (error) {
            console.error('Erro ao obter lançamentos:', error);
        }
    };

    useEffect(() => {
        const LancamentoMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=13cad3f7e8687d953894a955d97df6a1&language=pt-BR`;
        getLancamentos(LancamentoMovies);
    }, []);

    const addFavorito = (filme) => {
        if (!favoritos.find((fav) => fav.id === filme.id)) {
            setFavoritos([...favoritos, filme]);
        }
    };

    return (
        <>
            <h1 className="lancamento_title">Lançamentos</h1>
            <div className="todos_lancamentos">
                {lancamentos.map((lancamento) => (
                    <img
                        key={lancamento.id}
                        src={imageUrl + lancamento.poster_path}
                        alt=""
                        className="oneLancamento"
                        onClick={() => addFavorito(lancamento)}
                        />
                    ))}
            </div>
                    {favoritos.length > 0 && <TudoFavorito favorito={favoritos} setFavoritos={setFavoritos}/>}
        </>
    );
};

export default Lancamento;
