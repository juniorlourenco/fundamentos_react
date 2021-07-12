import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <div>Conteudo</div>
            <div>{props.titulo}</div>
        </div>
    );
};