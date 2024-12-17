import estados from './estados.json'
import React, {useState, useEffect} from 'react'

function FormEstados(props){

    const [listaEstados, setEstados] = useState([]);

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
                <label>Estado:</label>
            </div>
            <div className="formInput">
                <select>
                    {estados.map((estado, index) => (
                        <option key={index}>{estado.nome}</option>
                    ))}
                </select>
            </div>
        </>
    );
}
export default FormEstados