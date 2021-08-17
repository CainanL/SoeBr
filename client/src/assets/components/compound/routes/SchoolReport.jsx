import React from 'react';
import Reader from '../../simple/userarea/Reader'

function SchoolReport(props){
    return(
        <div>
            <Reader/>
            <div className='d-flex justify-content-center align-items-center flex-column container mt-4'>
                <h1 className='display-5 mb-5'>Boletim Escolar</h1>

                <div className='container'>
                    <ul className='list-group'>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            <strong>Disciplina</strong>
                            <span><strong>Nota</strong></span>
                        </li>
                    </ul>
                </div>


                <div className='container'>
                    <ul className='list-group'>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            Matemática
                            <span className='badge bg-secondary rounded-pill d-flex'>10</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default SchoolReport;