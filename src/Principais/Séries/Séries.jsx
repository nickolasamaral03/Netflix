import SeriesNoAr from "../../Components/Series_Session/SeriesNoAr/SeriesNoAr"
import SeriesLancHoje from "../../Components/Series_Session/Series_LancHoje/SeriesLancHoje"
import SeriesMelhores from "../../Components/Series_Session/Series_Melhores/SeriesMelhores"
import SeriesPopulares from "../../Components/Series_Session/Series_Populares/SeriesPop"
import Especificoserie from "../../especifico/especificoSerie.jsx/especificoserie"
import "./Séries.css"

const Séries = () => {
  return (
    <>
    <h1 className="series">Séries</h1>
    <div className="toda_serie">
      <Especificoserie/>
      <SeriesPopulares/>
      <SeriesNoAr/>
      <SeriesMelhores/>
      <SeriesLancHoje/>
    </div>
    </>
  )
}

export default Séries