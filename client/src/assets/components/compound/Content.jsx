import React, {useState} from 'react';
import Reader from '../simple/userarea/Reader';
import {Link} from 'react-router-dom';
import ContentSearchList from '../simple/userarea/ContentSearchList';

export default function Activities(){

    const [search, setSearch] = useState('');
    

    return (
        <div>
            <Reader />
            <div className='d-flex justify-content-evenly align-items-center mt-5'>
                <Link to={`/userarea/teacher/addActivicties`}>
                <button className='btn btn-success p-3 d-flex justify-content-center align-items-center'>
                    <div className='me-2'>Adicionar Conteúdo</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
                </Link>
            </div>             
            <ContentSearchList/>

        </div>
    )
}