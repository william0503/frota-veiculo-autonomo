import React, { useEffect, useState } from 'react';
import './style.css'
import logoImg from '../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import api from '../../services/api'
export default function Profile(){
    
    const userName = localStorage.getItem('userName');
    const userPhone = localStorage.getItem('userPhone');
    const [items, setItems] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('rides/users/' + userPhone)
        .then(res => {
            setItems(res.data.docs);
        })
    }, [userPhone]);

   // remover LocalStorage e voltar o usuário para a sessão de Logout
   function handleLogout(){
       localStorage.clear();
       history.push('/');
   }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Me Leva Ai"/>
                <span>Bem vindo(a), {userName}</span>
                <Link className="button" to="/running/new">
                    Cadastrar nova corrida
                </Link>
                <button onClick = {handleLogout}
                    type="button">
                    <FiPower size={16} color = "#E02041"/>
                </button>                
            </header>
            <h1>Histórico de Corridas</h1>
            <ul>
            {items.map(props => (
                    <li key={props._id}>
                        <strong>VEÍCULO:</strong>
                        <p>{props.vehicle.licensePlate}</p>

                        <strong>ORIGEM E DESTINO:</strong>
                        <p>{props.startPlace}</p> <p>{props.finishPlace}</p>
 
                        <strong>DATA E HORA DE CHEGADA:</strong>
                        <p>{props.finishTime}</p>

                        <strong>STATUS</strong>
                        <p>{props.status}</p>
                                               
                    </li>
                ))}
           
            </ul>

            
        </div>
    );
}