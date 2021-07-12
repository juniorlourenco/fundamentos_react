/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import FamilyMember from './FamilyMember';

export default props => {

    return (
        <div>
            <FamilyMember name="Pedro" lastname={props.lastname}/>
            <FamilyMember name="Ana" {...props}/>
            <FamilyMember name="James" lastname="Silva"/>
        </div>
    )
}

