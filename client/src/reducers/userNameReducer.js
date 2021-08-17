function userNameReducer(state = '...', action){    
    switch(action.type){
        case 'SET_NAME': return action.payload
        default: return state;
    }
}

export default userNameReducer;