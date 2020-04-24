import React, { useEffect, useState } from 'react';
import './style.css'
import logoImg from '../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'
export default function Profile(){
    
    const userName = localStorage.getItem('userName');
    const userPhone = localStorage.getItem('userPhone');
    
    const history = useHistory();

    useEffect(() => {
        api.get('profile',{
            headers:{
                Authorization: userPhone,
            }
        }).then(res => {
            
        });
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
            <li key={123}>
                <strong>CORRIDA:</strong>
                <p>{`CORRIDA NO DIA 17/06`}</p>

                <strong>VEÍCULO</strong>
                <p>{`DX-2118`}</p>

                <strong>ORIGEM E DESTINO:</strong>
                <p>{`ORIGEM: SP | DESTINO: NOVA IORQUE`}</p>

                <strong>ÍNICIO E FIM:</strong>
                <p>{`ÍNICIO: 13:00 | FIM: AINDA NÃO CALCULADO`}</p>

                <strong>STATUS:</strong>
                <p>{`EM ANDAMENTO`}</p>

                <button onClick={() => {}} type="button">
                    <FiTrash2 size = {20} color="#a8a8b3" />
                </button>
            </li>

            <li key={123}>
                <strong>CORRIDA:</strong>
                <p>{`CORRIDA NO DIA 17/06`}</p>

                <strong>VEÍCULO</strong>
                <p>{`DQX-2118`}</p>

                <strong>ORIGEM E DESTINO:</strong>
                <p>{`ORIGEM: SP | DESTINO: NOVA IORQUE`}</p>

                <strong>ÍNICIO E FIM:</strong>
                <p>{`ÍNICIO: 13:00 | FIM: 22:00`}</p>

                <strong>STATUS:</strong>
                <p>{`FINALIZADA`}</p>

                <button onClick={() => {}} type="button">
                    <FiTrash2 size = {20} color="#a8a8b3" />
                </button>
            </li>

            <li key={123}>
                <strong>CORRIDA:</strong>
                <p>{`CORRIDA NO DIA 17/06`}</p>

                <strong>VEÍCULO</strong>
                <p>{`DX-2118`}</p>

                <strong>ORIGEM E DESTINO:</strong>
                <p>{`ORIGEM: SP | DESTINO: NOVA IORQUE`}</p>

                <strong>ÍNICIO E FIM:</strong>
                <p>{`ÍNICIO: 13:00 | FIM: 22:00`}</p>

                <strong>STATUS:</strong>
                <p>{`FINALIZADA`}</p>

                <button onClick={() => {}} type="button">
                    <FiTrash2 size = {20} color="#a8a8b3" />
                </button>
            </li>

            <li key={123}>
                <strong>CORRIDA:</strong>
                <p>{`CORRIDA NO DIA 17/06`}</p>

                <strong>VEÍCULO</strong>
                <p>{`DX-2118`}</p>

                <strong>ORIGEM E DESTINO:</strong>
                <p>{`ORIGEM: SP | DESTINO: NOVA IORQUE`}</p>

                <strong>ÍNICIO E FIM:</strong>
                <p>{`ÍNICIO: 13:00 | FIM: 22:00`}</p>

                <strong>STATUS:</strong>
                <p>{`FINALIZADA`}</p>

                <button onClick={() => {}} type="button">
                    <FiTrash2 size = {20} color="#a8a8b3" />
                </button>
            </li>

            <li key={123}>
                <strong>CORRIDA:</strong>
                <p>{`CORRIDA NO DIA 17/06`}</p>

                <strong>VEÍCULO</strong>
                <p>{`DX-2118`}</p>

                <strong>ORIGEM E DESTINO:</strong>
                <p>{`ORIGEM: SP | DESTINO: NOVA IORQUE`}</p>

                <strong>ÍNICIO E FIM:</strong>
                <p>{`ÍNICIO: 13:00 | FIM: 22:00`}</p>

                <strong>STATUS:</strong>
                <p>{`FINALIZADA`}</p>

                <button onClick={() => {}} type="button">
                    <FiTrash2 size = {20} color="#a8a8b3" />
                </button>
            </li>

           
            </ul>

            
        </div>
    );
}