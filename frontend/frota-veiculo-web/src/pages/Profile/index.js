import React, { useEffect, useState } from 'react';
import './style.css'
import logoImg from '../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import api from '../../services/api'
export default function Profile(){
    
    const userName = localStorage.getItem('userName');
    const userPhone = localStorage.getItem('userPhone');
    let rides = [];
    const [teste, setTeste] = useState([]);
       
    const history = useHistory();
    debugger;
    useEffect(() => {
        api.get('rides/users/' + userPhone)
        .then(res => {
            rides = (res.data.docs);
            console.log(...rides);
            setTeste(...rides);
            console.log('Vindo vazio nesse ponto');
            console.log(teste);
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
                <span>Bem vinda, {userName}</span>
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
            {rides.map(props => (
                    <li key={props._id}>
                        <strong>CORRIDA:</strong>
                        <p>{props.licensePlate}</p>

                        <strong>DESTINO:</strong>
                        <p>{props.finishPlace}</p>

                        <strong>CHEGADA:</strong>
                        <p>{props.finishTime}</p>
                                               
                    </li>
                ))}
           
            </ul>

            
        </div>
    );
}