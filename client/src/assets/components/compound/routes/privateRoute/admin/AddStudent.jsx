import React, { useState } from 'react';
import Reader from '../../../../simple/userarea/Reader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { useSelector } from 'react-redux';

export default function AddStudent(propt) {

    const schoolName = useSelector((state) => { return state.setSchoolName });
    const idAdmin = useSelector((state) => { return state.idUser });

    const [series, setSeries] = useState('');
    const [userClass, setUserClass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [checked, setChecked] = useState(false);

    const [classSeries, setClasSeries] = useState('form-select');
    const [classUserClass, setClassUserClass] = useState('form-select');
    const [classFirstName, setClasFirstName] = useState('form-control form-control-sm mb-3 me-3 flex-grow-1');
    const [classLastName, setClasLastName] = useState('form-control form-control-sm mb-3');
    const [classEmail, setClasEmail] = useState('form-control form-control-sm mb-3 me-3');
    const [clasConfirmEmail, setClasConfirmEmail] = useState('form-control form-control-sm mb-3');
    const [classPhone, setClasPhone] = useState('form-control form-control-sm mb-3');
    const [classPassword, setClasPassword] = useState('form-control form-control-sm mb-3 me-3');
    const [classConfirmPassword, setClasConfirmPassword] = useState('form-control form-control-sm mb-3');
    const [classPirthDate, setClasBirthDate] = useState('form-control form-control-sm mb-3');
    const [classChecked, setClassChecked] = useState('');

    function sendRegistration(e) {
        e.preventDefault();

        //data validate
        if (series === "" || series === "Serie") {
            toast.error('Selecione uma serie para o aluno');
            setClasSeries("form-select border border-danger");
            return
        } else {
            setClasSeries("form-select");
        }

        if (userClass === "" || userClass === "Turma") {
            toast.error('Selecione uma classe para o aluno');
            setClassUserClass("form-select border border-danger");
            return
        } else {
            setClassUserClass("form-select");
        }

        if (firstName === "") {
            toast.error(':) adicione o primeiro nome do aluno');
            setClasFirstName("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClasFirstName("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (lastName === "") {
            toast.error(':) adicione o sobrenome do aluno');
            setClasLastName("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClasLastName("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (email === "") {
            toast.error(':) o email está vazio, crie um para seu aluno. Exemplo "email@exemplo.com"');
            setClasEmail("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClasEmail("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (email.length < 7) {
            toast.error(':) o email deve conter pelo menos 7 caracteres. Exemplo "email@exemplo.com"');
            setClasEmail("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClasEmail("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (email.includes("@") && email.includes(".com")) {
            setClasEmail("form-control form-control-sm mb-3 me-3 flex-grow-1");
        } else {
            toast.error(':) o email deve conter "@" e ".com" exemplo: "email@exemplo.com"');
            setClasEmail("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        }

        if (email !== confirmEmail) {
            toast.error(':) Os emails não confere, verifique-os e tente novamente');
            setClasConfirmEmail("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClasConfirmEmail("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (password === "") {
            toast.error(':) Escolha uma senha para seu aluno');
            setClasPassword("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            setPassword("")
            setConfirmPassword("")
            return
        } else {
            setClasPassword("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (password.length < 6) {
            toast.error(':) A senha deve conter pelo menos 6 caracteres');
            setClasPassword("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClasPassword("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (password !== confirmPassword) {
            toast.error(':) As senhas não conferem');
            setClasConfirmPassword("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClasPassword("form-control form-control-sm mb-3 me-3 flex-grow-1");
            setClasConfirmPassword("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if(phone === ""){
            toast.error(':) Preencha o campo "Celular", caso o aluno não tenha coloque: 00000000000');
            setClasPhone("form-control form-control-sm mb-3 me-3 flex-grow-1");
            return
        }else{
            setClasPhone("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (birthDate === "") {
            toast.error(':) Adicione a data de nascimento do aluno');
            setClasBirthDate("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClasBirthDate("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (!checked) {
            toast.error(":) Marque a caixa de confirmação de dados para continuar!")
            setClassChecked("border border-danger");
            return
        } else {
            setClassChecked('');
        }

        //send server
        const post = {
            fullName: firstName + " " + lastName,
            email: email,
            password: password,
            series: series,
            userClass: userClass,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            birthDate: birthDate,
            functionUser: 'student',
            schoolName: schoolName,
            idAdmin: idAdmin
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/user/registerStudent', options).then(res => {
            if(res.status === 409){
                toast.error("Email Já existe, por favor tente outro");
                setEmail("");
                setConfirmEmail("");
            }else if( res.status === 200){
                toast.success("Aluno cadastrado com sucesso!!!")
                setSeries('Serie');
                setUserClass('Turma');
                setFirstName('');
                setLastName('');
                setEmail('');
                setConfirmEmail('');
                setPassword('');
                setConfirmPassword('');
                setPhone('');
                setBirthDate('');
                setChecked(false);
            }else if(res.status === 400){
                toast.error("ERROR 400: BAD REQUEST => Verifique sua internet")
            }else{
                toast.error("ERROR: " + res.status + "MESSAGE: " + res.body);
            }
        })    
    }

    return (
        <div>
            <Reader />
            <div className='container pt-5'>
                <h1 className='text-center pb-3  display-6'>Cadastro de Aluno</h1>
                <form className='container d-flex flex-column'>
                    <div className='input-group mb-3'>
                        <select className={classSeries} id="inputGroupSelect01" value={series} onChange={(e) => { setSeries(e.target.value) }}>
                            <option defaultValue>Serie</option>
                            <option value="0">00</option>
                            <option value="1">01ª</option>
                            <option value="2">02ª</option>
                            <option value="3">03ª</option>
                            <option value="4">04ª</option>
                            <option value="5">05ª</option>
                            <option value="6">06ª</option>
                            <option value="7">07ª</option>
                            <option value="8">08ª</option>
                            <option value="9">09ª</option>
                            <option value="10">10ª</option>
                            <option value="11">11ª</option>
                            <option value="12">12ª</option>
                            <option value="13">13ª</option>
                            <option value="14">14ª</option>
                            <option value="15">15ª</option>
                            <option value="16">16ª</option>
                        </select>
                    </div>

                    <div className='input-group mb-3'>
                        <select className={classUserClass} id="inputGroupSelect02" value={userClass} onChange={e => setUserClass(e.target.value)}>
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

                    <div className='d-flex flex-column flex-sm-row'>
                        <input className={classFirstName} type='text' placeholder='Primeiro nome' value={firstName} onChange={e => setFirstName(e.target.value.toUpperCase())}></input>
                        <input className={classLastName} type='text' placeholder='Sobrenome' value={lastName} onChange={e => setLastName(e.target.value.toUpperCase())} ></input>
                    </div>
                    <div className='d-flex flex-column flex-sm-row'>
                        <input className={classEmail} type='Email' placeholder='Email: - Obs. O aluno usara para logar' value={email} onChange={e => setEmail(e.target.value)} ></input>
                        <input className={clasConfirmEmail} type='Email' placeholder='Confirme email' value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} ></input>
                    </div>
                    <div className='d-flex flex-column flex-sm-row'>
                        <input className={classPassword} type='password' placeholder='Nova senha' value={password} onChange={e => setPassword(e.target.value)} ></input>
                        <input className={classConfirmPassword} type='password' placeholder='Confirme a senha' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} ></input>
                    </div>
                    <div>
                        <input className={classPhone} type='tel' placeholder='Celular' value={phone} onChange={e => setPhone(e.target.value)} ></input>
                        <label className='form-label fs-6'>Data de Nascimento</label>
                        <input className={classPirthDate} type='date' placeholder='Data de nascimento' value={birthDate} onChange={e => setBirthDate(e.target.value)} ></input>
                    </div>


                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <div className={classChecked}><input type='checkbox' checked={checked} value={checked} onChange={() => { setChecked(!checked) }} /> Confirmos todos os dados cadastrais</div>
                        <button className='btn btn-success align-self-end' onClick={sendRegistration} >Adicionar</button>
                    </div>


                </form>
            </div>
            <ToastContainer />
        </div>
    )
}