import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams, useRouteMatch } from 'react-router';
import Reader from './Reader';

export default function AboutContent(props) {
    const data = useSelector(data => data.content);
    const match = useRouteMatch();//to use after with link and pay data of database

    console.log(data.urlVideo.substring(8,0));
    
    return (
        <div>
            <Reader />
            <div className='container'>
                <h1 className='display-6 text-center pt-5 pb-2'>{data.title}</h1>
                <div className='p-2 border rounded-3 border-2'>
                    <p className='text-break text-justify fs-4'>
                        {data.text}
                    </p>
                    <div className='d-flex flex-row justify-content-end'>
                        {data.urlVideo && data.urlVideo != '' ?
                        <button onClick={()=>{window.open(data.urlVideo.substring(8,0) == 'https://' || data.urlVideo.substring(7,0) == 'http://' ? data.urlVideo : 'https://' + data.urlVideo)}} className='btn btn-danger mx-2'>
                            Conteúdo em vídeo 
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-youtube mx-1" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                        </button> : <div/>}
                        {data.urlAbout && data.urlAbout != '' ? <button onClick={()=>{window.open(data.urlAbout.substring(8,0) == 'https://' || data.urlAbout.substring(7,0) == 'http://' ? data.urlAbout : 'https://' + data.urlAbout)}} className='btn btn-primary'>Saiba mais</button> : <div/>}
                    </div>
                </div>


            </div>
        </div>
    )
}