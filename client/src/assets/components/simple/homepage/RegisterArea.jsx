import React from 'react';

function RegisterArea(props){
    return(
        <div className='container-sm bg-indigo-100 my-5 d-flex justify-content-center align-items-center flex-column p-5'>
                <h3 className='display-4 pb-4 text-center'>Comece agora mesmo</h3>
                <div className='container'>
                    <form className='container d-flex flex-column'>
                        <input className='form-control form-control-sm mb-3' type='text' placeholder='Nome da escola'></input>
                        <div className='d-flex flex-column flex-sm-row'>
                            <input className='form-control form-control-sm mb-3 me-3 flex-grow-1' type='text' placeholder='Primeiro nome do diretor'></input>
                            <input className='form-control form-control-sm mb-3 ' type='text' placeholder='Sobrenome do diretor'></input>
                        </div>
                        <div className='d-flex flex-column flex-sm-row'>
                            <input className='form-control form-control-sm mb-3 me-3' type='text' placeholder='Email'></input>
                            <input className='form-control form-control-sm mb-3' type='tel' placeholder='Celular'></input>
                        </div>
                        <div className='d-flex flex-column flex-sm-row'>
                            <input className='form-control form-control-sm mb-3 me-3' type='text' placeholder='Nova senha'></input>
                            <input className='form-control form-control-sm mb-3' type='text' placeholder='Confirme a senha'></input>
                        </div>
                        <input className='form-control form-control-sm mb-3' type='date' placeholder='Data de nascimento'></input>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div><input type='checkbox' /> Lí e aceito todos os termos</div>
                            <button className='btn btn-success align-self-end'>Iniciar Teste</button>
                        </div>


                    </form>
                </div>
            </div>
    )
}

export default RegisterArea;