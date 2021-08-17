import React, { useEffect, useState } from 'react';
import Reader from '../../../../simple/userarea/Reader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { useSelector } from 'react-redux';

export default function FinancesAdmin(props) {

    const idUser = useSelector(data => data.idUser);
    const userData = useSelector(data => data.userData);
    const border = ['border border-danger', '' ,'border border-success', ];
    const bg = ['bg-success', 'bg-danger'];

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const [descriptionceBorder, setDescriptionBorder] = useState(border[1]);
    const [valueBorder, setValueBorder] = useState(border[1]);

    const [financeList, setFinanceList] = useState([])
    const [display, setDisplay] = useState('')

   
    function clearData(){
        setValue('');
        setDescription('');
    }

    function entrance(action){

        if(value.indexOf('-') >= 0){
            setValueBorder(border[0])
            toast.info('o valor deve ser escrito na forma positiva, sem "-"');
            return
        }else{
            setValueBorder(border[1])
        }

        if( description.length < 3){
            setDescriptionBorder(border[0])
            toast.error('Adicione uma descrição');
            return
        }else{
            setDescriptionBorder(border[1])
        }

        if( value == ''){
            setValueBorder(border[0])
            toast.error('Adicione um valor');
            return
        }else{
            setValueBorder(border[1])
        }

        if(value <= 0.00999999999999){
            setValueBorder(border[0])
            toast.info('o valor deve ser maior que R$0,00');
            return
        }else{
            setValueBorder(border[1])
        }

        const post = {
            description: description,
            idAdmin: idUser,
            fullName: userData.fullName,
            value: action == 'INNER' ? parseFloat(value.replace(',','.')) : parseFloat('-' + value.replace(',','.')),
            inOut: action
        }

        

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        console.log(options);

        fetch('/registration/registerFinance', options).then(res => {
            if(res.status == 200){
                toast.success(action === 'INNER' ? 'Valor cadastrado' : 'Valor removido');
                clearData();
                search();
            }else{
                toast.error(`Error ${res.status}`)
            }
        })
    }

    useEffect(()=>{
        search();
    },[])

    function search(){
        
        const post = {
            idAdmin: idUser
        }

        const options = {
            method: 'POST',
            headers: new Headers({
                'content-type':'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch('/search/searchFinance', options).then(res => {
            if(res.status == 200){
                return res.json();
            }else{
                toast.error(`ERRO ${res.status}`)
            }
        }).then(res => {
            res.reverse();
            let total = 0;
            res.map(item => {
                total = total + item.value;
                setDisplay(total.toFixed(2));
            })
            setFinanceList(res);
        })

    }
    
    return (
        <div>
            <Reader />
            <div className='container'>
                <div className='d-flex flex-column align-items-center justify-content-center pt-5 mb-5'>
                    <h1 className='display-1'>{`R$ ${display}`}</h1>
                    <h2 className='display-6'>Saldo Total</h2>
                    <div className='mt-5 input-group container px-5'>
                        <input placeholder='Descrição' className={`form-control ${descriptionceBorder}`} value={description} onChange={e => setDescription(e.target.value)}></input>
                    </div>
                    <div className='mt-1 input-group container px-5'>
                        <span className='input-group-text'>R$</span>
                        <input type='number' className={`form-control ${valueBorder}`} value={value} onChange={e => setValue(e.target.value)}></input>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-1'>
                        <button onClick={()=> {entrance('INNER')}} className='btn btn-success m-1'>Entradas</button>
                        <button onClick={()=> {entrance('OUT')}} className='btn btn-danger m-1'>Saida</button>
                    </div>
                </div>

                <ul className='list-group container' style={{ width: "100%" }}>
                {financeList.map(item =>
                    <li className='list-group-item d-flex justify-content-center align-items-center' key={item._id} style={{ width: "100%" }}>
                        <div className={`d-flex flex-column  card bg-light mb-3 ${item.inOut === 'INNER' ? border[2] : border[0]}`} style={{ width: "100%" }}>
                            <div className='card-header d-flex flex-row justify-content-between align-items-center' style={{ width: "100%" }}>
                                <div className='d-flex flex-column flex-sm-row flex-wrap bg-light p-1 justify-content-end align-items-center'>
                                    <h2>{item.description}</h2>
                                </div>
                            </div>
                            <div className={`text-light d-flex justify-content-between flex-row card-body card-text ${item.inOut === 'INNER' ? bg[0]: bg[1]}`} style={{ width: "100%" }}>
                                <div>R${item.value.toFixed(2)}</div>
                                <div>Data: {`${item.createDate.substring(8, 10)}/${item.createDate.substring(5, 7)}/${item.createDate.substring(0, 4)}`}</div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
            </div>
            <ToastContainer/>
        </div>
    )
}