import "./Login.css"
import Profile1 from "../../assets/profile_netlfix.png";
import Adicionar from "../../assets/adicionarPerfil.png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

const inputRef = useRef()

const [showInput, setShowInput] = useState(false)

    function AdicionarNome(){
        setShowInput(true)
    }

    function fecharInput(){
        setShowInput(false)
    }

  return (
    <>
    <div className="tudo">
    <div className='input_part'>
        <h2 className="texto_assistindo">Quem está assistindo?</h2>
    </div>
    <div className="perfis">
        <div className="nickolas2">
        <Link to="/browser"><img src={Profile1} alt="perfis" className='perfisTodos'/></Link>
        <h3 className="nickolas_name">Nickolas</h3>
        </div>
        
        <Link to="/series" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}><div className="infantil2"><span className="span_infantil">Infantil</span></div></Link>
        
       <div className="adicionar_div">
        <img src={Adicionar} alt="perfis" className='adicionar' onClick={AdicionarNome}/>
        <h3 className="adicionar_perfil">Adicionar Perfil</h3>
        {showInput &&  (
            <>
            <div className="div_adicionar">
            <input type="text" placeholder="Seu nome" className="seuNome" ref={inputRef}/>
            <Link to="/browser"><button className="entrar_button" onClick={() => console.log(inputRef.current.value)}>
                Entrar
            </button></Link>
            <button onClick={fecharInput} className="fechar_input">X</button>
            </div>
            </>
        )}
        </div>
    </div>
    </div>
    </>
  )
}

export default Login