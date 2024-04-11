import FilmesAnimacao from "../../Components/Filmes_Session/filmes/FilmesAnimacao/FilmesAnimacao";
import FilmesAventura from "../../Components/Filmes_Session/filmes/FilmesAventura/FilmesAventura";
import FilmesComedy from "../../Components/Filmes_Session/filmes/FilmesComedy/FilmesComedy";
import FilmesAção from "../../Components/Filmes_Session/filmes/filmes";
import Especificomovie from "../../especifico/especificoMovie.jsx/especificomovie";
import './Filmes.css'

const Filmes = () => {
  return (
    <>
    <div className="div-filmes">
    <h1 className="filmes">Filmes</h1>
    </div>
      <Especificomovie/>
      <FilmesAção/>
      <FilmesComedy/>
      <FilmesAventura/>
      <FilmesAnimacao/>
     
    </>
  );
};

export default Filmes;
