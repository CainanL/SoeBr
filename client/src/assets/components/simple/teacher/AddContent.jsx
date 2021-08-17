import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Reader from '../userarea/Reader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default function AddContent() {

    const border = ['', 'border border-danger', 'border-success']

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [urlVideo, setUrlVideo] = useState('');
    const [urlAbout, setUrlAbout] = useState('');
    const [userClass, setUserClass] = useState('');
    const [series, setSeries] = useState('');
    const [classTitle, setClassTitle] = useState(border[0]);
    const [classText, setClassText] = useState(border[0]);
    const [classUrlVideo, setClassUrlVideo] = useState(border[0]);
    const [classUrlAbout, setClassUrlAbout] = useState(border[0]);
    const [classSeries, setClassSeries] = useState(border[0]);
    const [classUserClass, setClassUserClass] = useState(border[0])

    const userData = useSelector(data => { return data.userData });

    function clearData(){
        setTitle('');
        setText('');
        setUrlVideo('');
        setUrlAbout('');
        setUserClass('');
        setSeries('');
    }

    function sendContent(e) {
        if (e) e.preventDefault();

        if (title.length < 3) {
            toast.info('O título deve ter ao menos 3 caracteres')
            setClassTitle(border[1])
            return
        }else{
            setClassTitle(border[0])
        }

        if (text.length < 3) {
            toast.info('O texto deve ter ao menos 3 caracteres')
            setClassText(border[1])
            return
        }else{
            setClassText(border[0])
        }

        if (series === 'Serie' || series === 'Ano' || series === '') {
            toast.info('Selecione a serie')
            setClassSeries(border[1])
            return
        }else{
            setClassSeries(border[0])
        }        

        if (userClass === 'Turma' || userClass === 'Class' || userClass === '') {
            toast.info('Selecione a serie')
            setClassUserClass(border[1])
            return
        }else{
            setClassUserClass(border[0])
        }

        const post = {
            idAdmin: userData.admin ? userData._id : userData.idAdmin,
            idPoster: userData._id,
            title: title,
            text: text,
            urlVideo: urlVideo,
            urlAbout: urlAbout,
            posterName: userData.firstName,
            subject: userData.subject,
            userClass: userClass,
            series: series
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type':'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/registration/registerContent', options).then(res => {
            if(res.status > 199 && res.status < 300){
                toast.success('Conteúdo postado');
                clearData();
            }else{
                toast.error('Erro ao postar conteúdo, tente novamente em alguns minutos');
            }
        })
    }





    return (
        <div>
            <Reader />
            <div className='container mt-5 d-flex flex-column'>
                <h1 className='display-6 text-center mb-5'>Adicionar Conteúdo</h1>
                <input type="text" class={`form-control mb-2 ${classTitle}`} placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
                <textarea type="area" class={`form-control mb-2 ${classText}`} placeholder="Texto" value={text} onChange={e => setText(e.target.value)} />
                <div className='input-group mb-2'>
                    <span className='input-group-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                    </span>
                    <input type="text" className={`form-control ${classUrlVideo}`} placeholder="Vídeo Youtube" value={urlVideo} onChange={e => setUrlVideo(e.target.value)} />
                </div>
                <div className='input-group mb-2'>
                    <span className='input-group-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                        </svg>
                    </span>
                    <input type="text" className={`form-control ${classUrlAbout}`} placeholder="Siba mais" value={urlAbout} onChange={e => setUrlAbout(e.target.value)} />
                </div>

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

                <button className='btn btn-success' onClick={sendContent}>
                    Enviar
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>

            </div>
            <ToastContainer />
        </div>
    )
}