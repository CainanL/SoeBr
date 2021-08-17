import React from 'react';
import { logoutAction} from '../../../../actions/loginActions';
import { useDispatch} from 'react-redux';

function Auth(props){

    const dispatch = useDispatch();

    return(
    <button className='btn btn-sm btn-outline-light'
        onClick={()=>{
            dispatch(logoutAction());
            localStorage.removeItem('soe-token');
            window.location.pathname = '/userarea';
            }}>
            sair
        </button>       
    )

}

export default Auth