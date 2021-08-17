import React from 'react'
import { useSelector } from 'react-redux';

function SchoolIdentification(props) {

    const schoolName = useSelector((state)=>{return state.setSchoolName})

    return (
        <div className='d-flex flex-column justify-content-center align-items-center p-4'>
            <img alt='School Logo' className='logo-width' src={props.urlImage}></img>
            <div className='display-6 mt-2 text-center'>{schoolName}</div>
        </div>
    )
}

export default SchoolIdentification;