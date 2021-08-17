import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({children, ...rest}){

    const student = true;

    return (
        <Route {...rest}

        render = {({location})=>
            login ? (children) : 
            (<Redirect to={{
                pathname: '/',
                state: {from: location}
            }}></Redirect>)
        }></Route>
    )
}