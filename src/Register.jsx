import {useRef, useState, useEffect} from 'react'
import FormInput from './components/FormInput.jsx'
import { Link } from 'react-router-dom'
import FormEstados from './components/FormEstados.jsx'


function Register(props){

    return(
    <>  
        <div className="register">
                <FormInput type="text" placeholder="Usuário"></FormInput>
                <FormInput type="email" placeholder="Email"></FormInput>
                <FormEstados></FormEstados>
                <FormInput type="password" placeholder="Senha"></FormInput>
                <FormInput type="password" placeholder="Confirmar Senha"></FormInput>
                
        </div>
        <div className="buttons">
                    <div className="buttonRegister">
                        <button>Registrar</button>
                    </div>
                    <Link to="/">
                        <div className="buttonBack">
                            <button>Voltar</button>
                        </div>  
                    </Link>
        </div>
    </>);
}

export default Register