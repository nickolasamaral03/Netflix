import PropTypes from 'prop-types';
import "./TudoFavorito.css";

const imageUrl = import.meta.env.VITE_IMG;

const TudoFavorito = (props) => {
  const { favorito } = props;
  const { setFavoritos } = props;

  const addFavoritos = (lancamento) => {
    if (!favorito.find((fav) => fav.id === lancamento.id)) {
        setFavoritos([...favorito, lancamento]);
    } else {
        setFavoritos(favorito.filter((fav) => fav.id !== lancamento.id)); 
    }
  }; 
  
  return (
    <>
      <div className="tudo_dos_favoritos">
        <h2 className='escolhidos'>Escolhidos:</h2>
        <div className="todos_favoritos">
          {favorito && favorito.map((filme) => (
            <img 
            key={filme.id} 
            src={imageUrl + filme.poster_path} 
            className="cada_favorito" 
            onClick={() => addFavoritos(filme)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

TudoFavorito.propTypes = {
  favorito: PropTypes.array,
  setFavoritos: PropTypes.func,
}

export default TudoFavorito;

