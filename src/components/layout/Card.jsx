import React from 'react';
import './Card.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className="Card">
            <div className="Title">Conteudo</div>
            <div className="Content">{props.titulo}</div>
        </div>
    );
};