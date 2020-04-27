import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'
import CarImg from '../../assets/car.png'
import logoImg from '../../assets/logo.png'

export default function Logon(){
    const [telephone, setTelephone] = useState('');
    const history = useHistory();
    async function handleLogin(event){
        event.preventDefault();
        try{
            // Get de login do usuario ja registrado
            const res =  await api.get('users/'+  telephone );

            // Salvando alguns dados importantes no Storage da aplicação
            localStorage.setItem('userPhone', res.data.telephone);
            localStorage.setItem('userName', res.data.name);

            // mandando para a rota de solicitaco de corrida
            history.push('/running/new')

        }
        catch(err){
            if (err.response.status == 400){
                alert(err.response.data);
                history.push('/register')
            }
            else
                alert('Falha no Login!');
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Me Leva Ai"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça o seu Login</h1>
                    <input 
                        placeholder="Seu telefone" 
                        value={telephone}
                        onChange={e=> setTelephone(e.target.value)}
                    />
                    <button className = "button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color = "#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={CarImg} alt="CarImg"/>
        </div>
    )
}
