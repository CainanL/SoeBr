import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default function AddEvents(props) {

    const userData = useSelector(data => { return data.userData });
    const [title, setTitle] = useState('');
    const [notice, setNotice] = useState('');

    const [classTitle, setClassTitle] = useState('');
    const [classNotice, setClassNotice] = useState('');

    const verificator = ['border border-danger', '']

    function sendEvent(e) {
        e.preventDefault();

        //verificador
        if (title.length < 2) {
            setClassTitle(verificator[0]);
            toast.error('O titulo deve ter ao menos 2 caracteres')
            return;
        } else {
            setClassTitle(verificator[1]);
        }

        if (notice.length < 5) {
            setClassNotice(verificator[0]);
            toast.error('O conteúdo da mensagem deve ter ao menos 5 caracteres')
            return;
        } else {
            setClassNotice(verificator[1]);
        }

        const post = {
            idAdmin: userData.admin ? userData._id : userData.idAdmin,
            idPoster: userData._id,
            schoolName: userData.schoolName,
            poster: userData.firstName,
            title: title,
            notice: notice
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/registration/registerEvents', options).then(res => {
            if (res.status === 200) {
                toast.success('Evento cadastrado');
                setTitle('');
                setNotice('');
                props.setReload(!props.reload);
            } else {
                toast.error(`Erro ${res.status} ao cadastrar Evento`);
            }
        })
    }

    return (
        <div>
            <h2 className='mt-5 text-end display-6 container'>Adicionar</h2>
            <form className='container d-flex flex-column p-3'>
                <input id='inputTitle' type='text' className={`my-1 mb-1 form-control  ${classTitle}`} placeholder='Título' value={title} onChange={e => setTitle(e.target.value)} />
                <textarea className={`my-1 mb-1 form-control ${classNotice}`} id="floatingTextarea2" placeholder='Conteúdo' value={notice} onChange={e => setNotice(e.target.value)}></textarea>

                <button className='btn btn-secondary' onClick={sendEvent}>
                    Enviar
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>
            </form>

            <ToastContainer />
        </div>
    )
}