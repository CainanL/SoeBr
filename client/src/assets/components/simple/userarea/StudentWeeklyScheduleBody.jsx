import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default function WeeklySchedule(props) {

    const userData = useSelector(data => data.userData);

    const [day, setDay] = useState('');

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const [fifith, setFifith] = useState('');
    const [sixth, setSixth] = useState('');
    const [seventh, setSeventh] = useState('');
    const [eighth, setEighth] = useState('');
    const [nineth, setNineth] = useState('');
    const [tenth, setTenth] = useState('');

    const [searchUserClass, setSearchUserClass] = useState('');
    const [searchSerie, setSearchSerie] = useState('');
    const [searchClassUserClass, setSearchClassUserClass] = useState('');
    const [searchClassSerie, setSearchClassSerie] = useState('');

    const border = ['border border-danger', '']

    const [addUserClass, setAddUserClass] = useState('');
    const [addUserSerie, setAddUserSerie] = useState('');

    const [weeklyScheduleList, setWeeklyScheduleList] = useState([]);

    function clearData(e) {
        if (e) e.preventDefault();
        setDay('');
        setFirst('');
        setSecond('');
        setThird('');
        setFourth('');
        setFifith('');
        setSixth('');
        setSeventh('');
        setEighth('');
        setNineth('');
        setTenth('');
        setAddUserClass('');
        setAddUserSerie('');
    }

    function corrigeData(){
        first.trim();
        second.trim();
        third.trim();
        fourth.trim();
        fifith.trim();
        sixth.trim();
        seventh.trim();
        eighth.trim();
        nineth.trim();
        tenth.trim();

        if(first === ' ') setFirst('');
        if(second === ' ') setSecond('');
        if(third === ' ') setThird('');
        if(fourth === ' ') setFourth('');
        if(fifith === ' ') setFifith('');
        if(sixth === ' ') setSixth('');
        if(seventh === ' ') setSeventh('');
        if(eighth === ' ') setEighth('');
        if(nineth === ' ') setNineth('');
        if(tenth === ' ') setTenth('');
    }

    function sendWeeklySchedule() {
        if (addUserClass == '' || addUserClass == 'Turma') {
            setSearchClassSerie(border[0])
            return
        } else {
            setSearchClassSerie(border[1])
        }

        if (addUserSerie == '' || addUserSerie == 'Serie' || addUserSerie == 'Ano') {
            setSearchClassUserClass(border[0])
            return
        } else {
            setSearchClassUserClass(border[1])
        }

        

        console.log('numeros', first, second);

        let post = {
            idAdmin: userData.admin ? userData._id : userData.idAdmin,
            series: addUserSerie,
            userClass: addUserClass,
            day: day,
            weeklySchedule: [first, second, third, fourth, fifith, sixth, seventh, eighth, nineth, tenth]
        }


        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        console.log(post, options)

        fetch('/registration/registerWeeklySchedule', options).then(res => {
            if (res.status !== 200) {
                toast.info(res.status);
            } else {
                clearData();
                searchWeeklySchedule();
                toast.success('Horário adicionado')
            }
            return res.json()
        }).then(res => {
            console.log(res);
        })
    }

    function searchWeeklySchedule() {
        if (searchSerie === '' || searchSerie === 'Ano') {
            toast.info('Escolha a Serie');
            return
        }

        if (searchUserClass === '' || searchUserClass === 'Turma') {
            toast.info('Escolha a Classe');
            return
        }

        const post = {
            idAdmin: userData.admin ? userData._id : userData.idAdmin,
            series: searchSerie,
            userClass: searchUserClass
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/search/searchWeeklySchedule', options).then(res => {
            if (res.status !== 200) toast(res.status);
            return res.json();
        }).then(res => {
            setWeeklyScheduleList(res);

        })
    }

    function filterMonday(item) {
        return item.day === "Segunda"
    }



    return (
        <div>
            <div className='text-center'>
                <h1 className='display-5 mt-5'> Horário</h1>
            </div>
            <div className='d-flex flex-row pt-2 container'>
                <div className='input-group my-1 me-1'>
                    <select id="inputGroupSelect01" className={`form-select ${searchClassSerie}`} value={searchSerie} onChange={e => setSearchSerie(e.target.value)}>
                        <option defaultValue>Ano</option>
                        <option value="0">00</option>
                        <option value="1">01º</option>
                        <option value="2">02º</option>
                        <option value="3">03º</option>
                        <option value="4">04º</option>
                        <option value="5">05º</option>
                        <option value="6">06º</option>
                        <option value="7">07º</option>
                        <option value="8">08º</option>
                        <option value="9">09º</option>
                        <option value="10">10º</option>
                        <option value="11">11º</option>
                        <option value="12">12º</option>
                        <option value="13">13º</option>
                        <option value="14">14º</option>
                        <option value="15">15º</option>
                        <option value="16">16º</option>
                    </select>
                </div>

                <div className='input-group my-1 ms-1'>
                    <select id="inputGroupSelect02" className={`form-select ${searchClassUserClass}`} value={searchUserClass} onChange={e => setSearchUserClass(e.target.value)}>
                        <option defaultValue>Turma</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="H">H</option>
                        <option value="I">I</option>
                        <option value="J">J</option>
                        <option value="K">K</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="N">N</option>
                        <option value="O">O</option>
                        <option value="P">P</option>
                    </select>
                </div>
            </div>

            <div className='d-flex flex-column container mb-5'>
                <button onClick={() => { searchWeeklySchedule() }} className='btn btn-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active p-5 bg-dark" data-bs-interval='999999999'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='display-6 text-light'>Segunda</h1>
                            <ul className='list-group pt-3 mb-3 d-flex justify-content-center align-items-center' style={{width: '100%'}}>


                                {weeklyScheduleList.map(item => item.day == 'Segunda' ? item.weeklySchedule.map(subject => subject.replace(' ', '').length > 1 ? <li className='list-group-item fs-5 mb-1' key={Math.random()} style={{width: '80%'}}>{subject}</li> : ''): '')}

                            </ul>
                            <button onClick={() => setDay('Segunda')} data-bs-toggle='modal' data-bs-target='#addWeeklyScheduleModal' className='btn btn-light'>Adicionar</button>
                        </div>
                    </div>

                    <div className="carousel-item p-5 bg-primary" data-bs-interval='999999999'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='display-6 text-light'>Terça</h1>
                            <ul className='list-group pt-3 mb-3 d-flex justify-content-center align-items-center' style={{width: '100%'}}>


                            {weeklyScheduleList.map(item => item.day == 'Terça' ? item.weeklySchedule.map(subject => subject.replace(' ', '').length > 1 ? <li className='list-group-item fs-5 mb-1' key={Math.random()} style={{width: '80%'}}>{subject}</li> : ''): '')}

                            </ul>
                            <button onClick={() => setDay('Terça')} data-bs-toggle='modal' data-bs-target='#addWeeklyScheduleModal' className='btn btn-light'>Adicionar</button>
                        </div>
                    </div>

                    <div className="carousel-item p-5 bg-secondary" data-bs-interval='999999999'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='display-6 text-light'>Quarta</h1>
                            <ul className='list-group pt-3 mb-3 d-flex justify-content-center align-items-center' style={{width: '100%'}}>


                            {weeklyScheduleList.map(item => item.day == 'Quarta' ? item.weeklySchedule.map(subject => subject.replace(' ', '').length > 1 ? <li className='list-group-item fs-5 mb-1' key={Math.random()} style={{width: '80%'}}>{subject}</li> : ''): '')}

                            </ul>
                            <button onClick={() => setDay('Quarta')} data-bs-toggle='modal' data-bs-target='#addWeeklyScheduleModal' className='btn btn-light'>Adicionar</button>
                        </div>
                    </div>

                    <div className="carousel-item p-5 bg-danger" data-bs-interval='999999999'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='display-6 text-light'>Quinta</h1>
                            <ul className='list-group pt-3 mb-3 d-flex justify-content-center align-items-center' style={{width: '100%'}}>


                            {weeklyScheduleList.map(item => item.day == 'Quinta' ? item.weeklySchedule.map(subject => subject.replace(' ', '').length > 1 ? <li className='list-group-item fs-5 mb-1' key={Math.random()} style={{width: '80%'}}>{subject}</li> : ''): '')}

                            </ul>
                            <button onClick={() => setDay('Quinta')} data-bs-toggle='modal' data-bs-target='#addWeeklyScheduleModal' className='btn btn-light'>Adicionar</button>
                        </div>
                    </div>

                    <div className="carousel-item p-5 bg-warning" data-bs-interval='999999999'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='display-6 text-light'>Sexta</h1>
                            <ul className='list-group pt-3 mb-3 d-flex justify-content-center align-items-center' style={{width: '100%'}}>


                            {weeklyScheduleList.map(item => item.day == 'Sexta' ? item.weeklySchedule.map(subject => subject.replace(' ', '').length > 1 ? <li className='list-group-item fs-5 mb-1' key={Math.random()} style={{width: '80%'}}>{subject}</li> : ''): '')}

                            </ul>
                            <button onClick={() => setDay('Sexta')} data-bs-toggle='modal' data-bs-target='#addWeeklyScheduleModal' className='btn btn-light'>Adicionar</button>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="modal fade" id="addWeeklyScheduleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="alert alert-secondary modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Adicionar Horário</h5>
                            <h5 className='modal-title'>{day}</h5>
                        </div>
                        <div className="modal-body">

                            <div className='d-flex flex-row pt-5'>
                                <div className='input-group my-1 me-1'>
                                    <select id="inputGroupSelect01" className={`form-select ${searchClassSerie}`} value={addUserSerie} onChange={e => setAddUserSerie(e.target.value)}>
                                        <option defaultValue>Ano</option>
                                        <option value="0">00</option>
                                        <option value="1">01º</option>
                                        <option value="2">02º</option>
                                        <option value="3">03º</option>
                                        <option value="4">04º</option>
                                        <option value="5">05º</option>
                                        <option value="6">06º</option>
                                        <option value="7">07º</option>
                                        <option value="8">08º</option>
                                        <option value="9">09º</option>
                                        <option value="10">10º</option>
                                        <option value="11">11º</option>
                                        <option value="12">12º</option>
                                        <option value="13">13º</option>
                                        <option value="14">14º</option>
                                        <option value="15">15º</option>
                                        <option value="16">16º</option>
                                    </select>
                                </div>

                                <div className='input-group my-1 ms-1'>
                                    <select id="inputGroupSelect02" className={`form-select ${searchClassUserClass}`} value={addUserClass} onChange={e => setAddUserClass(e.target.value)}>
                                        <option defaultValue>Turma</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                        <option value="G">G</option>
                                        <option value="H">H</option>
                                        <option value="I">I</option>
                                        <option value="J">J</option>
                                        <option value="K">K</option>
                                        <option value="L">L</option>
                                        <option value="M">M</option>
                                        <option value="N">N</option>
                                        <option value="O">O</option>
                                        <option value="P">P</option>
                                    </select>
                                </div>
                            </div>

                            <form>
                                <input placeholder='1º Horário' className='form-control mb-1' type="text" value={first} onChange={e => setFirst(e.target.value)} />
                                <input placeholder='2º Horário' className={`form-control mb-1 ${first === '' ? 'visually-hidden' : ''}`} type="text" value={second} onChange={e => setSecond(e.target.value)} />
                                <input placeholder='3º Horário' className={`form-control mb-1 ${second === '' ? 'visually-hidden' : ''}`} type="text" value={third} onChange={e => setThird(e.target.value)} />
                                <input placeholder='4º Horário' className={`form-control mb-1 ${third === '' ? 'visually-hidden' : ''}`} type="text" value={fourth} onChange={e => setFourth(e.target.value)} />
                                <input placeholder='5º Horário' className={`form-control mb-1 ${fourth === '' ? 'visually-hidden' : ''}`} type="text" value={fifith} onChange={e => setFifith(e.target.value)} />
                                <input placeholder='6º Horário' className={`form-control mb-1 ${fifith === '' ? 'visually-hidden' : ''}`} type="text" value={sixth} onChange={e => setSixth(e.target.value)} />
                                <input placeholder='7º Horário' className={`form-control mb-1 ${sixth === '' ? 'visually-hidden' : ''}`} type="text" value={seventh} onChange={e => setSeventh(e.target.value)} />
                                <input placeholder='8º Horário' className={`form-control mb-1 ${seventh === '' ? 'visually-hidden' : ''}`} type="text" value={eighth} onChange={e => setEighth(e.target.value)} />
                                <input placeholder='9º Horário' className={`form-control mb-1 ${eighth === '' ? 'visually-hidden' : ''}`} type="text" value={nineth} onChange={e => setNineth(e.target.value)} />
                                <input placeholder='10º Horário' className={`form-control mb-1 ${nineth === '' ? 'visually-hidden' : ''}`} type="text" value={tenth} onChange={e => setTenth(e.target.value)} />
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button onClick={clearData} type="button" className="btn btn-danger" data-bs-dismiss="modal">fechar</button>
                            <button onClick={() => { sendWeeklySchedule() }} className="btn btn-success">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}