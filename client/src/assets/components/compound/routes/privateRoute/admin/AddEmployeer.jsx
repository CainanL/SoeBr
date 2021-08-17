import React, { useEffect, useState } from 'react';
import Reader from '../../../../simple/userarea/Reader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { useSelector } from 'react-redux';

export default function AddEmployeer(propt) {

    const schoolName = useSelector((state) => { return state.setSchoolName });
    const idAdmin = useSelector((state) => { return state.idUser });

    const [userFunction, setUserFunction] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [checked, setChecked] = useState(false);
    const [subject, setSubject] = useState('')

    const [classUserFunction, setClassUserFunction] = useState('form-select');
    const [classFirstName, setClassFirstName] = useState('form-control form-control-sm mb-3 me-3 flex-grow-1');
    const [classLastName, setClassLastName] = useState('form-control form-control-sm mb-3');
    const [classEmail, setClassEmail] = useState('form-control form-control-sm mb-3 me-3');
    const [classConfirmEmail, setClassConfirmEmail] = useState('form-control form-control-sm mb-3');
    const [classPhone, setClassPhone] = useState('form-control form-control-sm mb-3');
    const [classPassword, setClassPassword] = useState('form-control form-control-sm mb-3 me-3');
    const [classConfirmPassword, setClassConfirmPassword] = useState('form-control form-control-sm mb-3');
    const [classBirthDate, setClassBirthDate] = useState('form-control form-control-sm mb-3');
    const [classChecked, setClassChecked] = useState('');
    const [classSubject, setClassSubject] = useState('visually-hidden');

    useEffect(() => {

        if(userFunction === 'teacher'){
            setClassSubject(' ')
        }else{
            setClassSubject('visually-hidden');
            setSubject('')
        }
    }, [userFunction])

    function sendRegistration(e) {
        e.preventDefault();

        //data validate
        if(userFunction === 'Função' || userFunction === ''){
            setClassUserFunction("form-control form-control-sm mb-3 flex-grow-1 border border-danger");
            toast.error(':) Adicione uma função ao funcionário');
            return
        }else{
            setClassUserFunction("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }
       
        if(userFunction === 'teacher' && subject === ""){
            setClassSubject(" border border-danger");
            toast.error("Adicione a disciplina que o professor lessiona")
            return
        }else{
            setClassSubject('')
        }

        if (firstName === "") {
            toast.error(':) adicione o primeiro nome do funcionário');
            setClassFirstName("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClassFirstName("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (lastName === "") {
            toast.error(':) adicione o sobrenome do funcionário');
            setClassLastName("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClassLastName("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (email === "") {
            toast.error(':) o email está vazio, crie um para seu funcionário. Exemplo "email@exemplo.com"');
            setClassEmail("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClassEmail("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (email.length < 7) {
            toast.error(':) o email deve conter pelo menos 7 caracteres. Exemplo "email@exemplo.com"');
            setClassEmail("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClassEmail("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (email.includes("@") && email.includes(".com")) {
            setClassEmail("form-control form-control-sm mb-3 me-3 flex-grow-1");
        } else {
            toast.error(':) o email deve conter "@" e ".com" exemplo: "email@exemplo.com"');
            setClassEmail("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        }

        if (email !== confirmEmail) {
            toast.error(':) Os emails não confere, verifique-os e tente novamente');
            setClassConfirmEmail("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClassConfirmEmail("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (password === "") {
            toast.error(':) Escolha uma senha para seu funcionário');
            setClassPassword("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            setPassword("")
            setConfirmPassword("")
            return
        } else {
            setClassPassword("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (password.length < 6) {
            toast.error(':) A senha deve conter pelo menos 6 caracteres');
            setClassPassword("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClassPassword("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (password !== confirmPassword) {
            toast.error(':) As senhas não conferem');
            setClassConfirmPassword("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClassPassword("form-control form-control-sm mb-3 me-3 flex-grow-1");
            setClassConfirmPassword("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (phone === "") {
            toast.error(':) Preencha o campo "Celular", caso o funcionário não tenha coloque: 00000000000');
            setClassPhone("form-control form-control-sm mb-3 me-3 flex-grow-1");
            return
        } else {
            setClassPhone("form-control form-control-sm mb-3 me-3 flex-grow-1");
        }

        if (birthDate === "") {
            toast.error(':) Adicione a data de nascimento do funcionário');
            setClassBirthDate("form-control form-control-sm mb-3 me-3 flex-grow-1 border border-danger");
            return
        } else {
            setClassBirthDate("form-control form-control-sm mb-3 me-3 flex-grow-1");
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
            fullName: firstName.toUpperCase() + " " + lastName.toUpperCase(),
            email: email,
            password: password,
            firstName: firstName.toUpperCase(),
            lastName: lastName.toUpperCase(),
            phone: phone,
            birthDate: birthDate,
            functionUser: userFunction,
            schoolName: schoolName.toUpperCase(),
            idAdmin: idAdmin,
            subject: subject.toUpperCase(),
            employeer: true,
            admin: false
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        console.log(options.body)

        fetch('/user/registerEmployeer', options).then(res => {
            if(res.status === 409){
                toast.error("Email Já existe, por favor tente outro");
                setEmail("");
                setConfirmEmail("");
            }else if( res.status === 200){
                toast.success(`${userFunction} cadastrado com sucesso!!!`)
                setUserFunction('Função');
                setFirstName('')
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
                <h1 className='text-center pb-3  display-6'>Cadastro de Funcionário</h1>
                <form className='container d-flex flex-column'>
                    <div className='input-group mb-3'>
                        <select className={classUserFunction} id="inputGroupSelect01" value={userFunction} onChange={e => setUserFunction(e.target.value)}>
                            <option defaultValue>Função</option>
                            <option value="coordinator">Coordenador</option>
                            <option value="teacher">Professor</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                    <div className={` d-hiden flex-column flex-sm-row`}>
                        <input className={`${classSubject} form-control form-control-sm mb-3`} type='text' placeholder='Disciplina que o professor lessiona' value={subject} onChange={e => setSubject(e.target.value)}></input>
                    </div>
                    <div className='d-flex flex-column flex-sm-row'>

                        <input className={classFirstName} type='text' placeholder='Primeiro nome' value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                        <input className={classLastName} type='text' placeholder='Sobrenome' value={lastName} onChange={e => setLastName(e.target.value)}></input>
                    </div>
                    <div className='d-flex flex-column flex-sm-row'>
                        <input className={classEmail} type='Email' placeholder='Email: - Obs. O funcionário usarar para logar' value={email} onChange={e => setEmail(e.target.value)}></input>
                        <input className={classConfirmEmail} type='Email' placeholder='Confirme email' value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)}></input>
                    </div>
                    <div className='d-flex flex-column flex-sm-row'>
                        <input className={classPassword} type='password' placeholder='Nova senha' value={password} onChange={e => setPassword(e.target.value)}></input>
                        <input className={classConfirmPassword} type='password' placeholder='Confirme a senha' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <input className={classPhone} type='tel' placeholder='Celular' value={phone} onChange={e => setPhone(e.target.value)}></input>
                        <label className='form-label fs-6'>Data de Nascimento</label>
                        <input className={classBirthDate} type='date' placeholder='Data de nascimento' value={birthDate} onChange={e => setBirthDate(e.target.value)}></input>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <div className={classChecked}><input  type='checkbox' checked={checked} value={checked} onChange={() => setChecked(!checked)}/> Confirmos todos os dados cadastrais</div>
                        <button className='btn btn-success align-self-end' onClick={sendRegistration}>Adicionar</button>
                    </div>

                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}