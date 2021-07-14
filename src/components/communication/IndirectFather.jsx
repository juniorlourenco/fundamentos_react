/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import IndirectSon from './IndirectSon';

export default props => {
    let nome ='?'
    let idade = 0
    let nerd = false
    //nome idade nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndirectSon quandoClicar={fornecerInformacoes}></IndirectSon>
        </div>
    )
}