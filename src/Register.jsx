import {useRef, useState, useEffect} from 'react'
import FormInput from './components/FormInput.jsx'
import { Link } from 'react-router-dom'


function Register(props){

    return(
    <>
    <FormInput type="text" placeholder="Usuário"></FormInput>
    <FormInput type="email" placeholder="Email"></FormInput>
    <FormInput type="password" placeholder="Senha"></FormInput>
    <button>Registrar</button>
    <Link to="/">
        <button>Voltar</button>
    </Link>
    </>);
}

export default Register