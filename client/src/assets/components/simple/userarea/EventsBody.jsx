import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default function EscheduleBody(props) {

    const idAdmin = useSelector(data => { return data.idUser })
    const userData = useSelector(data => { return data.userData })

    const [tasks, setTasks] = useState([]);

    const [idTask, setIdTask] = useState('');
    const [titleTask, setTitleTask] = useState('')

    function setSchedule(id, title) {
        setIdTask(id);
        setTitleTask(title);
    }

    useEffect(()=>{
        searchEvent();
    },[])

    useEffect(()=>{
        searchEvent();
    },[props.reload])

    function removeSchedule(e) {
        if (e) e.preventDefault();

        const post = {
            _id: idTask
        }

        const options = {
            method: 'DELETE',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/remove/events', options).then(res => {
            if (res.status === 200) {
                toast.success('Task removido');
                searchEvent();
                return res.json();
            } else {
                toast.error(`erro ${res.status} ao remover task`)
            }
        })

        
    }

    function searchEvent(e) {
        if (e) e.preventDefault();

        const post = {
            idAdmin: idAdmin,
            schoolName: userData.schoolName
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/search/searchEvent', options).then(res => {
            console.log(res.status)
            if (res.status === 400) {
                toast.error(`Erro ${res.status} ao carregar agenda`)
            }
            return res.json();
        }).then(students => {
            students.reverse();
            setTasks(students);
            console.log(students)
        });
    }

    return (
        <div className='container d-flex flex-column mt-5'>
            <ul className='list-group' style={{ width: "100%" }}>
                {tasks.map(item =>
                    <li className='list-group-item d-flex justify-content-center align-items-center' key={item._id} style={{ width: "100%" }}>
                        <div className='d-flex flex-column  card bg-light mb-3' style={{ width: "100%" }}>
                            <div className='card-header d-flex flex-row justify-content-between align-items-center' style={{ width: "100%" }}>
                                <h2 className='card-title fs-5'>{item.title}</h2>
                                <div className=' d-flex flex-row flex-wrap bg-light p-1 justify-content-end align-items-center'>

                                    {item.idPoster === userData._id ?
                                    <button onClick={()=>{setSchedule(item._id, item.title)}} data-bs-toggle='modal' data-bs-target='#confirmDeletStudentModal' className='btn btn-danger m-1' title='excluir'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button> : ''}                                    
                                    
                                </div>
                            </div>
                            <div className='d-flex justify-content-between flex-column card-body card-text' style={{ width: "100%" }}>
                                <p className='text-end'>
                                    {`Postador(a): ${item.poster}`}
                                </p>
                                <p>
                                    {item.notice}
                                </p>
                            </div>
                        </div>
                    </li>)
                }
            </ul>


            <div className="modal fade" id="confirmDeletStudentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="alert alert-danger modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{`Você realmente deseja  deletar o registro de: ${titleTask}?`}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {` Após deletados os dados não poderão ser resgatados`}
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => { setSchedule('', '') }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button onClick={removeSchedule} type="button" className="btn btn-danger" data-bs-dismiss="modal">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}