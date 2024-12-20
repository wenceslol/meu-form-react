import estados from './estados.json'
import React, {useState, useEffect} from 'react'
import Register from '../Register.jsx'
import PropTypes from 'prop-types'

function FormEstados(props){

    //Altere >estados< por listaEstados para fazer uso da API
    const [listaEstados, setEstados] = useState('');
    const{label, onChange, id, ...inputProps} = props;

    //Usa o Fetch para recuperar dados da API
    useEffect(() => {
        fetch("https://brasilapi.com.br/api/ibge/uf/v1")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setEstados(data);
            })
    }, []);

    return(
        <>
            <div className="formLabel">
                <label>{label}:</label>
            </div>
            <div className="formInput">
                <select {...inputProps}
                        onChange={onChange}
                        required>
                    {estados.map((e, index) => (
                        <option key={index} value={e.nome}>{e.nome}</option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default FormEstados