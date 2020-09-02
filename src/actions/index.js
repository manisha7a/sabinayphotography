import { SIGN_IN, SIGN_OUT, SAVE_DESIGN } from './types';

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return{
        type: SIGN_OUT
    }
}

export const saveDesign = formValues => dispatch => {
    //will add axios to post data to firebase, formValues will ihnclude t shirt color too
    dispatch({ type: SAVE_DESIGN, payload: formValues });
}
