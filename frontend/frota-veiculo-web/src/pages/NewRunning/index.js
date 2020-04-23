import React, { useState } from 'react';
import './style.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.png';



export default function NewRunning(){
    const [source, setSource ] = useState('');
    const [featured, setFeatured ] = useState('');
    const userPhone = localStorage.getItem('userPhone');
    const history = useHistory();
    async function handleNewIncident(event){
        event.preventDefault();

        const data ={
            source, 
            featured,
        };

        try{
           data.source = 'Finlandia'
           data.featured = 'Nova Iorque'

           //////// mandar para a nova tela de acompahamento da corrida
           history.push('/race/new');

        } catch(err){
            alert('Erro ao solicitar corrida, tente novamente!')
        }

    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Me Leva Ai"/>
                <h1>Cadastrar nova corrida</h1>
                <p>Informe a sua Origem e o seu Destino que o Me Leva Aí te leva!.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color = "#E02041"/>
                    Voltar para Home
                </Link>

                </section>
                <form onSubmit={handleNewIncident}>

                <input 
                    placeholder="Origem" 
                    value={source}
                    onChange={e=>setSource(e.target.value)}
                    />
                <input
                    placeholder="Destino" 
                    value={featured}
                    onChange={e=>setFeatured(e.target.value)}
                    />

                <button className="button" type="submit">Solicitar</button>

                </form>
            </div>
        </div>
    );
}