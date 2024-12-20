import {useRef, useState, useEffect} from 'react'
import FormInput from './components/FormInput.jsx'
import { Link } from 'react-router-dom'
import FormEstados from './components/FormEstados.jsx'
import setEstado from './components/FormEstados.jsx'
import PropTypes from 'prop-types'


function Register(props){

    //Cria um objeto para armazenar todos os dados do usuário
    const [values, setValues] = useState({
        username:"",
        email:"",
        estado:"Default",
        password:"",
        confirmPassword:"",
    });


    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"O nome de usuário deve conter entre 3 a 16 caracteres e não incluir caracteres especiais!",
            label:"Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"Insira um email válido!",
            label:"Email",
            required: true,
        },
        {
            id:3,
            name:"age",
            type:"date",
            placeholder:"age",
            errorMessage:"",
            label:"Data de nascimento:"
        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"A senha deve conter de 8 a 20 caracteres e deve incluir ao menos 1 letra maiúscula e minúscula, 1 número e 1 caractere especial!",
            label:"Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage:"As senhas não coincidem!",
            label:"Confirm Password",
            pattern: values.password,
            required: true,
        }
    ]

    const handleChange =(e) =>{
        //Espalha os dados já existentes e atualiza cada target.name com seu respectivo valor
        setValues({...values, [e.target.name]: e.target.value});
    }

    function RegistroSistema(event){
        event.preventDefault();
        const data = new FormData(event.target)
        console.log(`Usuário ${values.username} registrado com sucesso!`)
    }

    return(
    <>  
        <form onSubmit={RegistroSistema}>
            <div className="register">
                {inputs.map(input => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}></FormInput>
                ))}
                <FormEstados label="Estado:" name="estado" value="estado" onChange={handleChange}></FormEstados>

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
        </form>
    </>);
}

export default Register