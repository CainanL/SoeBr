import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import userNameAction from '../../../../actions/userNameAction';
import schoolNameAction from '../../../../actions/schoolNameAction';
import { useDispatch, useSelector } from 'react-redux';
import AuthButton from '../../simple/userarea/AuthButton';
import functionUserAction from '../../../../actions/functionUserAction';
import idAction from '../../../../actions/idAction';
import userAction from '../../../../actions/userAction';

function Reader() {

    const dispatch = useDispatch();

    useEffect(() => {
        const soeToken = localStorage.getItem('soe-token');

        const post = {
            token: soeToken
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/user/userAreaData', options).then(res => {
            return res.json()
        }).then(user => {
            if (user) {
                const userData = user;
                dispatch(userData.functionUser === 'admin' ? idAction(userData._id) : idAction(userData.idAdmin));
                dispatch(schoolNameAction(userData.schoolName))
                dispatch(functionUserAction(userData.functionUser))
                dispatch(userNameAction(userData.firstName));
                dispatch(schoolNameAction(userData.schoolName));
                dispatch(userAction(userData));
            }
        })
    },[dispatch])

    const userFistName = useSelector((state)=> {return state.userSetFirstName});

    return (
        <div>
            <div className='bg-secondary p-1'>
                <header className='container text-light d-flex justify-content-between align-items-center'>

                    <h1 className='display-6 m-0'><Link to='/' className='link-light'>SOEBr</Link></h1>

                    <div className='d-flex justify-content-center align-items-center m-0'>
                        <div className='display-6 me-1'>{userFistName}</div>
                        <svg className='ms-2 bi bi-bell' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                    </div>

                    <AuthButton className='m-0'/>

                </header>
            </div>
        </div>
    )
}

export default Reader;