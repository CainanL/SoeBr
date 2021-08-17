import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default function AddTaskSchedule(props) {

    const userData = useSelector(data => { return data.userData });
    const [title, setTitle] = useState('');
    const [notice, setNotice] = useState('');
    const [series, setSeries] = useState('');
    const [userClass, setUserClass] = useState('');

    const [classTitle, setClassTitle] = useState('');
    const [classNotice, setClassNotice] = useState('');
    const [classSeries, setClassSeries] = useState('');
    const [classUserClass, setClassUserClass] = useState('');

    const verificator = ['border border-danger', '']

    function teste(e) {
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

        if (series.length === 0 || series === 'Serie') {
            setClassSeries(verificator[0]);
            toast.error('Selecione a serie a ser enviado o aviso')
            return;
        } else {
            setClassSeries(verificator[1]);
        }

        if (userClass.length === 0 || userClass === 'Turma') {
            setClassUserClass(verificator[0]);
            toast.error('Selecione a classe a ser enviado o aviso')
            return;
        } else {
            setClassUserClass(verificator[1]);
        }

        const post = {
            idAdmin: userData.admin ? userData._id : userData.idAdmin,
            idPoster: userData._id,
            series: series,
            userClass: userClass,
            schoolName: userData.schoolName,
            subject: userData.admin ? 'DIRETOR' : userData.functionUser === "coordinator" ? 'Coordenador': userData.subject,
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

        fetch('/registration/registerSchedule', options).then(res => {
            if (res.status === 200) {
                toast.success('Lembrete cadastrado na agenda');
                setTitle('');
                setNotice('');
                setSeries('');
                setUserClass('');
                props.setReload(!props.reload);
            } else {
                toast.error(`Erro ${res.status} ao cadastrar lembrete`);
            }

        })
    }

    return (
        <div>
            <h2 className='mt-5 text-end display-6 container'>Adicionar</h2>
            <form className='container d-flex flex-column p-3'>
                <input id='inputTitle' type='text' className={`my-1 mb-1 form-control  ${classTitle}`} placeholder='Título' value={title} onChange={e => setTitle(e.target.value)} />
                <textarea className={`my-1 mb-1 form-control ${classNotice}`} id="floatingTextarea2" placeholder='Conteúdo' value={notice} onChange={e => setNotice(e.target.value)}></textarea>

                <div className='d-flex flex-row'>
                    <div className='input-group my-1 me-1'>
                        <select id="inputGroupSelect01" className={`form-select ${classSeries}`} value={series} onChange={e => setSeries(e.target.value)}>
                            <option defaultValue>Serie</option>
                            <option value="0">00</option>
                            <option value="1">01ª</option>
                            <option value="2">02ª</option>
                            <option value="3">03ª</option>
                            <option value="4">04ª</option>
                            <option value="5">05ª</option>
                            <option value="6">06ª</option>
                            <option value="7">07ª</option>
                            <option value="8">08ª</option>
                            <option value="9">09ª</option>
                            <option value="10">10ª</option>
                            <option value="11">11ª</option>
                            <option value="12">12ª</option>
                            <option value="13">13ª</option>
                            <option value="14">14ª</option>
                            <option value="15">15ª</option>
                            <option value="16">16ª</option>
                        </select>
                    </div>

                    <div className='input-group my-1 ms-1'>
                        <select id="inputGroupSelect02" className={`form-select ${classUserClass}`} value={userClass} onChange={e => setUserClass(e.target.value)}>
                            <option defaultValue>Turma</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                            <option value="J">J</option>
                            <option value="K">K</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="N">N</option>
                            <option value="O">O</option>
                            <option value="P">P</option>
                        </select>
                    </div>
                </div>

                <button className='btn btn-secondary' onClick={teste}>
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