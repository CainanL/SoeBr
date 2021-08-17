import React, { useState, useEffect } from 'react';
import Reader from '../../../../simple/userarea/Reader';
import { useSelector } from 'react-redux';

export default function SchoolReportAdmin(props) {

    const hidden = ['visually-hidden', ''];
    const [studentName, setStudentName] = useState('');
    const [studentsList, setStudentsList] = useState([]);

    const idAdmin = useSelector(state => { return state.idUser });

    function searchStudent(event) {
        if (event) event.preventDefault();

        const post = {
            idAdmin: idAdmin,
            fullName: studentName
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/search/deepSearchStudent', options).then(res => {
            if (res.status === 400) {
                console.log('erro')
            }
            return res.json();
        }).then(students => {
            setStudentsList(students);
        });
    }

    function onChangeStudentName(event) {
        let studentName = event.target.value;
        setStudentName(studentName.toUpperCase());
    }

    useEffect(() => {
        const post = {
            idAdmin: idAdmin,
            fullName: studentName
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/search/deepSearchStudent', options).then(res => {
            if (res.status === 400) {
                console.log('erro')
            }
            return res.json();
        }).then(students => {
            setStudentsList(students);
        });
    }, [studentName, idAdmin])

    function setData(student) {
        console.log(student)
    }

    return (

        <div className='d-flex flex-column justify-content-center'>
            <Reader />
            <form className='d-flex p-5 container input-group'>
                <input onChange={onChangeStudentName} id='inputStudentName' type='text' className='form-control' placeholder='Aluno' />
                <button onClick={searchStudent} className='btn btn-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </form>

            <ul className='list-group' style={{ width: "100%" }}>
                {studentsList.map(item =>
                    <li className='list-group-item d-flex justify-content-center align-items-center' key={item._id} style={{ width: "100%" }} data-bs-toggle='modal' data-bs-target='#setMensageModal' >
                        <button onClick={() => { setData(item) }} className='btn' style={{ width: "100%" }}>
                            <div className='d-flex flex-column  card bg-light mb-3' style={{ width: "100%" }}>
                                <div className='card-header d-flex flex-row justify-content-between align-items-center' style={{ width: "100%" }}>
                                    <h2 className='card-title fs-5'>{item.fullName}</h2>
                                    <div className=' d-flex flex-row flex-wrap bg-light p-1 justify-content-end align-items-center'>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between flex-row card-body card-text' style={{ width: "100%" }}>
                                    <div>{item.series}ª serie</div>
                                    <div>Turma {item.userClass}</div>
                                </div>
                            </div>
                        </button>
                    </li>)
                }
            </ul>



            <div className="modal fade" id="setMensageModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="alert alert-secondary modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Título</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            Texto
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-success" >Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}