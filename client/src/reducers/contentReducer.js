export default function contentReducer(state = {}, action){
    switch (action.type) {
        case 'CONTENT_SEND': return action.payload;
        default : return state;
    }
}