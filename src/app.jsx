/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import First from '../src/components/basics/First';
import WithParams from '../src/components/basics/WithParams';
import Fragment from '../src/components/basics/Fragment';

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragment />
        <WithParams
                titulo="Situação do Aluno" 
                aluno="Pedro"
                nota={9.3} 
        />
        <First />
    </div>
);