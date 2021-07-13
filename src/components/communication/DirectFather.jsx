/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DirectSon from './DirectSon';

export default props => {
    return(
        <div>
            <DirectSon name="Petter" age={20} nerd={true}></DirectSon>
            <DirectSon name="John" age={18} nerd={false}></DirectSon>
        </div>
    )
}