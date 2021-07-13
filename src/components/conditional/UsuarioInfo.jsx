/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import If, {Else} from './If';

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
            Seja bem vindo <strong>{props.usuario.nome}</strong>
            </If>
            <If test={!usuario || usuario.nome}>
            <p>Seja bem vindo <strong>Anônimo</strong></p>
            </If> */}

            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    <p>Seja bem vindo <strong>Amigão</strong></p>
                </Else>
            </If>
            
        </div>
    )
}