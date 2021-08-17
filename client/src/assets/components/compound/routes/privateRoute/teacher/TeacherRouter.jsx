import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export default function TeacherRouter({children, ...rest}){

    const login = useSelector(state => state.loginLogout);
    const userFunction = useSelector((state) => { return state.userFunction });
    return (
        
        <Route {...rest}

        render = {({location})=>{
            if(login && userFunction === 'teacher'){
                return (children)
            }else{
                return (<Redirect to='/'></Redirect>)
            }
        }}></Route>
    )    
}