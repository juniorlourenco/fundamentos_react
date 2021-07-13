/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import students from '../../data/students';

export default props => {
    const StudentsLI = students.map(student => {
        return <li key={student.id}>{student.id} {student.nome} - {student.nota}</li>
    })
    return(
        <div>
            <ul>
                {StudentsLI}
            </ul>
        </div>
    )
}