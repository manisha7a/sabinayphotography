import { SAVE_DESIGN } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SAVE_DESIGN:
            return {...state, formValues:action.payload}
        default:
            return state;
    }
}