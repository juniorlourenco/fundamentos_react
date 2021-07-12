/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './App.css';

import Card from './components/layout/Card';
import Aleatorio from './components/basics/Random';
import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import Fragment from './components/basics/Fragment';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#4 Desafio Aleatório">
                <Aleatorio min={1} max={60}/>
            </Card>
            
            <Card titulo="#3 Fragmento">
                <Fragment />
            </Card>
        
            <Card titulo="#2 Com Parametro">
                <WithParams
                    titulo="Situação do Aluno" 
                    aluno="Pedro"
                    nota={9.3} 
                />
            </Card>

            <Card titulo="#1 Primeiro Componente">
                <First />
            </Card>
        </div>    
    </div>
);