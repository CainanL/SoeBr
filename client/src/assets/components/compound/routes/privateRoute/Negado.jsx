import React from 'react';
import Header from '../../../simple/homepage/Header';

export default function Negado(props) {
    return (
        <div className='d-flex justify-content-center align-item-center flex-column text-center'>
            <Header />
            <h1 className='display-6 text-danger mt-4'>Acesso Negado</h1>
            <h2 className='mt-3 display-6'>Logue para continuar!!!</h2>
        </div>
    )
}