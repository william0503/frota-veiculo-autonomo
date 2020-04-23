import React, { useState } from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
export default function RequestRace(){
    // criando os estados para manipular os inputs 
    const [vehicle, setVehicle] = useState('');
    const [timeArrival, setTime] = useState('');
    const [status, setStatus] = useState('');
    
    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        // Objeto que está sendo instanciado pelo input e será utilizado na API 
        const data ={vehicle, timeArrival, status};

        try{
            //const res = await api.post('users',data);
            //alert(`Seu ID de acesso: ${res.data.telephone}`);
            history.push('/race/finish');
        }
        catch (err){
            alert('Erro ao iniciar corrida!');
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
                    value={'DDX-2118'}
                    onChange={e => setVehicle(e.target.value)}
                    disabled={true}
                
                />
                <input 
                    type="Previsão de Chegada" 
                    placeholder="Previsão de Chegada"
                    value={'21:30'}
                    onChange={e => setTime(e.target.value)}
                    disabled={true}
                    
                />
                <input 
                    placeholder="Status"
                    value={'AGUARDANDO INICIAR'}
                    onChange={e => setStatus(e.target.value)}
                    disabled={true}
                />                      

                <button className="button" type="submit">Iniciar Corrida</button>

                </form>
            </div>
        </div>
    );
}