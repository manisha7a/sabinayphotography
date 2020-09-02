import { combineReducers } from 'redux';
import { reducer as  formReducer } from 'redux-form';
import authReducer from './authReducer';
import tshirtDesignReducer from './tshirtDesignReducer';
import saveReducer from './saveReducer';

export default combineReducers({
    auth: authReducer,
    design: tshirtDesignReducer,
    saveDesign: saveReducer,
    form:formReducer
});
