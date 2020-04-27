import React from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
export default function RequestRace(props){
    // criando os estados para manipular os inputs 
    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data ={"type": "start"};

        try{
            const res =  await api.patch('rides/' + props.location.state._id, data);
            history.push('/race/finish', res.data);
        }
        catch (err){
            alert(err.response.data);
        }    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Me Leva Ai"/>
                <h1>Iniciando Corrida</h1>
                <p>Valide seu veículo e verifique a previsão de chegada no Me Leva Aí!.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color = "#E02041"/>
                    Histórico de Corridas
                </Link>

                </section>
                <form onSubmit={handleRegister}>
                <input 
                    placeholder="Veículo"
                    value={props.location.state.vehicle.licensePlate}
                    disabled={true}
                
                />
                <input 
                    type="Previsão de Chegada" 
                    placeholder="Previsão de Chegada"
                    value={'21:30'}
                    disabled={true}
                    
                />
                <input 
                    placeholder="Status"
                    value={'AGUARDANDO INICIAR'}
                    disabled={true}
                />                      

                <button className="button" type="submit">Iniciar Corrida</button>

                </form>
            </div>
        </div>
    );
}