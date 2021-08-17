const initialState = ()=>{
    if(localStorage.getItem('soe-token')){
        return true
    }else{
        return false;
    }
    
}

function loginReducer(state = initialState(), action){
    switch(action.type){
        case 'LOGIN': return true;
        case 'LOGOUT': return false;
        default: return state;
    }
}

export default loginReducer;