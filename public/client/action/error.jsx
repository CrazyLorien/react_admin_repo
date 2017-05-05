import  constants  from '../core/constants';

export default {
    CLEAR_ALL: function () {
         return (dispatch) => {
            dispatch({
                type: constants.CLEAR_ALL,
                data:null
            })
        }
    },
    SET_CLIENT_VALIDATION_ERRORS: function(){
         return (dispatch) => {
            dispatch({
                type: constants.SET_CLIENT_VALIDATION_ERRORS,
                data:null
            })
        }
    }
}