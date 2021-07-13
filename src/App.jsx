/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './App.css';

import ProductsList from './components/repeat/ProductsTable';
import ListStudents from './components/repeat/ListStudents';
import FamilyMember from './components/basics/FamilyMember';
import Family from './components/basics/Family';
import Card from './components/layout/Card';
import Aleatorio from './components/basics/Random';
import First from './components/basics/First';
import WithParams from './components/basics/WithParams';
import Fragment from './components/basics/Fragment';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#7 - Tabela de produtos" color ="#900C3F">
                <ProductsList />
            </Card>

            <Card titulo="#6 - Repetição" color="#FF4C65">
                <ListStudents />
            </Card>

            <Card titulo="#5 Componente com Filhos" color="#00C8F8">
                <Family lastname="Ferreira">
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Gustavo" />
                </Family>
            </Card>

            <Card titulo="#4 Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}/>
            </Card>
            
            <Card titulo="#3 Fragmento" color="#E94C6F">
                <Fragment />
            </Card>
        
            <Card titulo="#2 Com Parametro" color="#E8B71A">
                <WithParams
                    titulo="Situação do Aluno" 
                    aluno="Pedro"
                    nota={9.3} 
                />
            </Card>

            <Card titulo="#1 Primeiro Componente" color="#588C73">
                <First />
            </Card>
        </div>    
    </div>
);