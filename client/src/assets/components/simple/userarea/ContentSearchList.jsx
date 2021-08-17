import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { useDispatch } from 'react-redux';
import contentAction from '../../../../actions/contentAction';

export default function EscheduleBody(props) {

    const dispatch = useDispatch();

    const userData = useSelector(data => { return data.userData });

    const [series, setSeries] = useState('');
    const [userClass, setUserClass] = useState('');
    const [titleSearch, setTitleSearch] = useState('');
    const [searchSubject, setSearchSubject] = useState('');
    const [toMe, setToMe] = useState(false);
    const [contents, setContents] = useState([]);

    const [idPost, setIdPost] = useState('');

    useEffect(() => {
        searchSchedule();
    }, [])

    useEffect(() => {
        searchSchedule();
    }, [props.reload])

    function searchSchedule(e) {
        if (e) e.preventDefault();

        const post = {
            idAdmin: userData.admin ? userData._id : userData.idAdmin,
            idPoster: toMe ? userData._id : '',
            subject: searchSubject,
            userClass: userClass === 'Turma' || userClass === '' ? '' : userClass,
            series: series === 'Serie' || series === '' ? '' : series
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/search/searchContent', options).then(res => {
            if (res.status === 400) {
                toast.error(`Erro ${res.status} ao carregar agenda`)
            }
            return res.json();
        }).then(contentList => {
            contentList.reverse();
            setContents(contentList);
        });
    }

    function deletContent(){
        if(idPost == '') return

        const post = {
            _id: idPost
        }

        const options = {
            method: 'DELETE',
            headers: new Headers({
                'content-type':'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/remove/content', options).then(res => {
            res.status > 199 && res.status < 300 ? toast.success('Conteúdo deletado') : toast.error(`Erro ${res.status} ao tentar deletar coneúdo`)
        })

        setIdPost('');
        searchSchedule();
    }



    return (
        <div className='container d-flex flex-column'>

            <div>
                <h2 className='text-end display-6'>Buscar</h2>
            </div>
            <div className='d-flex flex-row'>
                <div className='input-group my-1 me-1'>
                    <select id="inputGroupSelect01" className={`form-select `} value={series} onChange={e => setSeries(e.target.value)}>
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
                    <select id="inputGroupSelect02" className={`form-select`} value={userClass} onChange={e => setUserClass(e.target.value)}>
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
            <input id='inputStudentName' type='text' className={`my-1 form-control mb-1`} placeholder='Título' value={searchSubject} onChange={e => setSearchSubject(e.target.value)} />
            <button className='btn btn-primary my-1' onClick={searchSchedule}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>

            <ul className='list-group' style={{ width: "100%" }}>
                {contents.map(item =>
                    <li className='list-group-item d-flex justify-content-center align-items-center' key={item._id} style={{ width: "100%" }}>
                        <div className={`d-flex flex-column  card mb-3 border ${item.idPoster === userData._id ? 'border-primary' : 'border-success'}`} style={{ width: "100%" }}>
                            <div className='card-header d-flex flex-row justify-content-between align-items-center' style={{ width: "100%" }}>
                                <h2 className='card-title fs-5 text-dark'>{item.title}</h2>
                                <div className=' d-flex flex-row flex-wrap bg-light p-1 justify-content-end align-items-center'>
                                    {item.idPoster == userData._id ? <button onClick={() => { setIdPost(item._id)}} data-bs-toggle='modal' data-bs-target='#confirmDeletStudentModal' className='btn btn-danger m-1' title='excluir'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button> : <div></div>}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between flex-column card-body card-text' style={{ width: "100%" }}>
                                <p className='text-end'>
                                    {`Postador(a): ${item.poster}`}
                                </p>
                                <p>
                                    {item.text.substring(0, 149) + "..."}
                                </p>
                                <Link to={`/userarea/teacher/content/aboutcontent/${item._id}`}className='text-end'>
                                    <button onClick={()=>{dispatch(contentAction(item))}} className={`btn ${item.idPoster === userData._id ? 'bg-primary' : 'bg-success'} text-light`}>Saiba mais</button>
                                </Link>
                            </div>
                            <div className={`d-flex justify-content-between flex-row card-footer card-text text-light ${item.idPoster === userData._id ? 'bg-primary' : 'bg-success'}`} style={{ width: "100%" }}>
                                <div>{item.series}ª serie</div>
                                <div>Turma {item.userClass}</div>
                                <div>Data: {`${item.date.substring(8, 10)}/${item.date.substring(5, 7)}/${item.date.substring(0, 4)}`}</div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>


            <div className="modal fade" id="confirmDeletStudentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="alert alert-danger modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{`Você realmente deseja  deletar o registro de: ${`título task`}?`}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {` Após deletados os dados não poderão ser resgatados`}
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => { setIdPost('')}} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button onClick={deletContent} type="button" className="btn btn-danger" data-bs-dismiss="modal">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}