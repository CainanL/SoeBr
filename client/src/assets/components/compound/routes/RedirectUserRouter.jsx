import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Reader from '../../simple/userarea/Reader';
import { useEffect, useState } from 'react';
export default function RedirectUserRouter(props) {

    const login = localStorage.getItem('soe-token');

    const userFunction = useSelector((state) => { return state.userFunction });
    const [route, setRoute] = useState('/set');

    console.log(userFunction);

    useEffect(()=>{
        switch (userFunction) {
            case '...': setRoute('/set')
                break;
            case 'admin': setRoute('/admin')
                break;
            case 'student': setRoute('/userarea')
                break;
            case 'teacher': setRoute('/userarea/teacher')
                break;
            case 'coordinator' : setRoute('/coordinator')
                break;
            default: console.log(userFunction)
                break;
        }
    }, [userFunction])    

    return (
        <div>
            <Reader />
            {login ? <Redirect to={route}/> : console.log('erro')}
        </div>
    )
}

