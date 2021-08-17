export default function functionUserReducer(state = null, action){
    switch (action.type) {
        case 'USER_FUNCTION': return action.payload;
        default : return state;
    }
}