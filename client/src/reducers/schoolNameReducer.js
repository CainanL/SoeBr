function schoolNameReducer(state = '...', action){    
    switch(action.type){
        case 'SET_SCHOOL_NAME': return action.payload
        default: return state;
    }
}

export default schoolNameReducer;