/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => {
    return(
        <div>
            <span>{props.name} </span>
            <span><strong>{props.age}</strong> </span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}