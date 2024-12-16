import FormInput from './components/FormInput.jsx'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Login(props){

    const userLogin = "thiago";
    const userPassword = 123;

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    function handleLoginChange(event){
        setLogin(event.target.value);
        console.log(login);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
        console.log(password);
    }

    function handleAuthentication(event){
        event.preventDefault();
        if (login==userLogin && password==userPassword){
            console.log("Login realizado com sucesso!");
        }
        else{
            console.log("Usuário ou senha incorretos!")
            console.log(login);
            console.log(password);
        }
    }

    function handleRegister(event){
        
    }

    return(
            <>
            <h1 className="loginTitle">Meu formulario React</h1>
            <form>
            <FormInput type="text" placeholder="Usuário" value={setLogin} onChange={handleLoginChange}></FormInput>
            <FormInput type="password" placeholder="Senha" value={setPassword} onChange={handlePasswordChange}></FormInput>
            <button onClick={handleAuthentication}>Login</button>
            <Link to="/register">
                <button onClick={handleRegister}>Registro</button>
            </Link>
            </form>
            </>
    );
}

export default Login