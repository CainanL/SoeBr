import React, { useEffect, useState }  from 'react';
import Reader from '../../../../simple/userarea/Reader';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmployeerList from '../../../../simple/employeerSearch/EmployeerList'

export default function Employees(props) {

    
    const [employeerName, setEmployeerName] = useState('');
    const [employeerList, setEmployeerList] = useState([]);

    const userFunction = useSelector((state) => { return state.userFunction });
    const idAdmin = useSelector(state => {return state.idUser});


    function searchEmployeer(event){
        if(event){
            event.preventDefault(); 
        }
              
        
        const post = {
            idAdmin: idAdmin,
            fullName: employeerName
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type':'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/search/searchEmployeer', options).then(res => {
            if(res.status === 400){
                console.log('erro')
            }
            return res.json();
        }).then(students => {
            setEmployeerList(students);
        });     
    }
    
    function onChangeStudentName(event){
        let employeerName = event.target.value;
        setEmployeerName(employeerName.toUpperCase());
    }

    useEffect(()=>{        
        const post = {
            idAdmin: idAdmin,
            fullName: employeerName
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type':'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/search/searchEmployeer', options).then(res => {
            if(res.status === 400){
                console.log('erro')
            }
            return res.json();
        }).then(students => {
            setEmployeerList(students);
        });  
    },[employeerName, idAdmin])


    return (
        <div>
            <Reader />
            <form className='d-flex p-5 container input-group'>
                <input onChange={onChangeStudentName} id='inputStudentName' type='text' className='form-control' placeholder='Funcionário' />
                <button onClick={searchEmployeer} className='btn btn-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </form>
            <div className='d-flex justify-content-evenly align-items-center mt-1'>
                <Link to={`/${userFunction}/employees/addEmployeer`}>
                <button className='btn btn-success p-3 d-flex justify-content-center align-items-center'>
                    <div className='me-2'>Adicionar Funcionário</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
                </Link>
            </div>    
            <EmployeerList searchEmployeer={searchEmployeer} employeerList={employeerList}/>  
        </div>

    )
}