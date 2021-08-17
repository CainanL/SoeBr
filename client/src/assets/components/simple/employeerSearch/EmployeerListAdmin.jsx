import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

export default function StudentList(props) {
    
    const userData = useSelector((data) => { return data.userData });
    const visible = ['visually-hidden', ''];
    const border = ['border border-danger', ''];

    let employeerList = props.employeerList;
    const [studentNameBeDeleted, setStudentNameBeDeleted] = useState('');
    const [studentIdBeDeleted, setStudentIdBeDeleted] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [userFunction, setUserFunction] = useState('');
    const [userClass, setUserClass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [subject, setSubject] = useState('');

    const [firstNameBorder, setFirstNameBorder] = useState(border[1]);
    const [secondNameBorder, setSecondNameBorder] = useState(border[1]);
    const [phoneBorder, setPhoneBorder] = useState(border[1]);
    const [functionUserBorder, setFunctionUserBorder] = useState(border[1]);
    const [subjectBorder, setSubjectBorder] = useState(border[1])
    const [emailBorder, setEmailBorder] = useState(border[1]);
    const [passwordBorder, setPasswordBorder] = useState(border[1]);
    const [birthDateBorder, setBirthDateBorder] = useState(border[1]);

    const [titleMessage, setTitleMessage] = useState('');
    const [textMessage, setTextMessage] = useState('');
    const [titleMessageBorder, setTitleMessageBorder] = useState('');
    const [textMessageBorder, setTextMessageBorder] = useState('');

    

    employeerList.sort(function (x, y) {
        let a = x.fullName.toUpperCase(),
            b = y.fullName.toUpperCase();
        return a === b ? 0 : a > b ? 1 : -1;
    })

    function setData(id, name) {
        setStudentNameBeDeleted(name.toUpperCase());
        setStudentIdBeDeleted(id);
    }

    function setDataEdit(user) {
        setStudentNameBeDeleted(user.fullName);
        setStudentIdBeDeleted(user._id);
        setEmail(user.email);
        setPhone(user.phone);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setBirthDate(user.birthDate);
        setSubject(user.subject);
        setUserFunction(user.functionUser)

        console.log(user);
    }

    function clearMessege(){
        setTitleMessage('');
        setTextMessage('');
    }
    function clearUserData() {
        setStudentNameBeDeleted('');
        setStudentIdBeDeleted('');
        setEmail('');
        setPhone('');
        setUserFunction('');
        setUserClass('');
        setFirstName('');
        setLastName('');
        setBirthDate('');
        setPassword('');
        setSubject('');
    }

    function deleteStudent(id) {
        const post = {
            _id: id,
        }

        const options = {
            method: 'DELETE',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/user/removeStudent', options).then(res => {
            if (res.status === 400) {
                toast.error('Erro ao deletar usuário, recarregue a página e tente novamente')
            } else {
                clearUserData()
                return res.json();
            }

        }).then(employeerList => {
            toast.success('Aluno removido com sucesso', employeerList);
        });

        
        props.searchEmployeer();
    }

    function editEmployeer() {

        if (firstName.length < 3) {
            setFirstNameBorder(border[0])
            toast.error('O nome precisa ter ao menos 3 caracteres')
            return
        }else{
            setFirstNameBorder(border[1])
        }

        if (lastName.length < 6) {
            setSecondNameBorder(border[0])
            toast.error('O sobrenome precisa ter ao menos 6 caracteres')
            return
        }else{
            setSecondNameBorder(border[1])
        }

        if (phone.length < 8) {
            setPhoneBorder(border[0])
            toast.error('O celular precisa ter pelo menos 8 caracteres')
            return
        }else{
            setPhoneBorder(border[1])
        }

        if (phone.length < 8) {
            setPhoneBorder(border[0])
            toast.error('O celular precisa ter pelo menos 8 caracteres')
            return
        }else{
            setPhoneBorder(border[1])
        }

        if(userFunction == 'Função' || userFunction == ''){
            toast.error(':) Adicione uma função ao usuário');
            setFunctionUserBorder(border[0]);
            return
        }else{
            setFunctionUserBorder(border[1]);
        }

        if(subject == 'Função' || subject == '' || subject.length == 0){
            toast.error(':) Adicione uma disciplina ao professor');
            setSubjectBorder(border[0]);
            return
        }else{
            setSubjectBorder(border[1]);
        }

        if (email === "") {
            toast.error(':) o email está vazio, crie um para seu funcionário. Exemplo "email@exemplo.com"');
            setEmailBorder(border[0]);
            return
        } else {
            setEmailBorder(border[1]);
        }

        if (email.length < 7) {
            toast.error(':) o email deve conter pelo menos 7 caracteres. Exemplo "email@exemplo.com"');
            setEmailBorder(border[0]);
            return
        } else {
            setEmailBorder(border[1]);
        }

        if (email.includes("@") && email.includes(".com")) {
            setEmailBorder(border[1]);
        } else {
            toast.error(':) o email deve conter "@" e ".com" exemplo: "email@exemplo.com"');
            setEmailBorder(border[0]);
            return
        }

        if(password == '' || password > 6 ) {
            setPasswordBorder(border[1]);            
        } else {
            setPasswordBorder(border[0]);
            toast.error('O password deve conter ao menos 6 caracteres');
            return
        }

        if (birthDate === "") {
            toast.error(':) Adicione a data de nascimento do funcionário');
            setBirthDateBorder(border[0]);
            return
        } else {
            setBirthDateBorder(border[1]);
        }

        const post = {
            _id: studentIdBeDeleted,
            lastName: lastName.toUpperCase(),
            email: email,
            password: password,
            functionUser: userFunction,
            firstName: firstName.toUpperCase(),
            fullName: firstName.toUpperCase() + " " + lastName.toUpperCase(),
            phone: phone,
            birthDate: birthDate,
            subject: subject.toUpperCase()
        }

        console.log(post)

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/user/updateEmployeer', options).then(res => {
            if (res.status === 400) {
                toast.error('Erro 400 ao editar, recarregue a página e tente novamente')
            } else if (res.status === 404) {
                toast.error('Erro 404 ao editar, recarregue a página e tente novamente')
            } else if (res.status === 200) {
                toast.success('Dados cadastrais editados com sucesso');
                clearUserData()
                return res.json();
            } else {
                toast.info('Verifique se o processo');
                return res.json();
            }
        }).then(employeerList => {
            toast.info(employeerList);
        });

        props.searchEmployeer();
    }

    function sendMessage(e) {
        if(e) e.preventDefault();

        if (titleMessage.length < 3) {
            toast.error('Adicione um título à menssagem');
            setTitleMessageBorder(border[0]);
            return;
        } else {
            setTitleMessageBorder(border[0]);
        }

        if (textMessage.length < 3) {
            toast.error('Adicione um título à menssagem');
            setTextMessageBorder(border[0]);
            return;
        } else {
            setTextMessageBorder(border[0]);
        }


        const post = {
            fullNamePoster: userData.fullName,
            functionPoster : userData.functionUser,
            idPoster: userData._id,
            idReceiver: studentIdBeDeleted,
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/registration/registerMessage', options).then(res => {
            if (res.status === 400) {
                toast.error('Erro ao deletar enviar mensagem tente novamente')
            } else {
                toast.success('Mensagem Enviada');
                clearMessege();
            }

        })

    }

    return (
        <div className='container mt-5 d-flex justify-content-center align-items-center flex-column'>

            <ul className='list-group' style={{ width: "100%" }}>
                {employeerList.map(item => 
                    <li className='list-group-item d-flex justify-content-center align-items-center' key={item._id} style={{ width: "100%" }}>
                        <div className='d-flex flex-column  card bg-light mb-3' style={{ width: "100%" }}>
                            <div className='card-header d-flex flex-row justify-content-between align-items-center' style={{ width: "100%" }}>
                                <button  data-bs-toggle='modal' data-bs-target='#setMensageModal'  onClick={()=>{setDataEdit(item)}} className='card-title fs-5 btn'>{item.fullName}</button>
                                <div className=' d-flex flex-row flex-wrap bg-light p-1 justify-content-end align-items-center'>

                                    <button data-bs-toggle='modal' data-bs-target='#editDeletStudentModal' className='btn btn-primary m-1' title='editar' onClick={() => { setDataEdit(item) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </button>

                                    <button data-bs-toggle='modal' data-bs-target='#confirmDeletStudentModal' onClick={() => { setData(item._id, item.fullName) }} className='btn btn-danger m-1' title='excluir'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between flex-row card-body card-text' style={{ width: "100%" }}>
                                <div>Função: {item.functionUser.toLowerCase()}</div><div>{item.functionUser == "Professor" ? `Matéria: ${item.subject}` : ''}</div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>

            <div className="modal fade" id="confirmDeletStudentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="alert alert-danger modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{`Você realmente deseja  deletar o registro de: ${studentNameBeDeleted}?`}</h5>
                            <button onClick={clearUserData} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {` Após deletados os dados não poderão ser resgatados`}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button onClick={() => { deleteStudent(studentIdBeDeleted) }} type="button" className="btn btn-danger" data-bs-dismiss="modal">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="editDeletStudentModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="alert alert-secondary modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{`${studentNameBeDeleted}`}</h5>
                            <button onClick={clearUserData} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <input className={`form-control mb-1 ${firstNameBorder}`} placeholder='Primeiro nome' type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <input className={`form-control mb-1 ${secondNameBorder}`} placeholder='Sobrenome' type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                            <input className={`form-control mb-1 ${phoneBorder}`} placeholder='Celular' type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                            <div className='input-group mb-1'>
                                <select className={`form-select ${functionUserBorder}`} id="inputGroupSelect01" value={userFunction} onChange={e => setUserFunction(e.target.value)}>
                                    <option defaultValue>Função</option>
                                    <option value="Coordinator">Coordenador</option>
                                    <option value="Professor">Professor</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>

                            <input className={`form-control mb-1 ${userFunction === 'Professor' ? visible[1] : visible[0]} ${subjectBorder}`} placeholder='Disciplina' type="text" value={subject} onChange={e => setSubject(e.target.value)} />
                            <input className={`form-control mb-1 ${emailBorder}`}placeholder='Email' type="text" value={email} onChange={e => setEmail(e.target.value)} />
                            <input className={`form-control mb-1 ${passwordBorder}`} placeholder='Senha' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <input className={`form-control mb-1 ${birthDateBorder}`} placeholder='Data de nascimento' type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                            <button onClick={() => { editEmployeer() }} type="button" className="btn btn-success">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="setMensageModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="alert alert-secondary modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{`Mensagem para: ${studentNameBeDeleted}`}</h5>
                            <button onClick={clearUserData} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <input className="form-control mb-1" placeholder='Assunto' type="text" value={titleMessage} onChange={e => setTitleMessage(e.target.value)} />
                            <textarea className="form-control mb-1" placeholder='Conteúdo' type="text" value={textMessage} onChange={e => setTextMessage(e.target.value)} />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                            <button onClick={sendMessage} type="button" className="btn btn-success" >Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>


    )
}