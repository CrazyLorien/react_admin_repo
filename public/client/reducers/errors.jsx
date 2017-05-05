export default function errors(state = { errorsList: [], clientErrorsExistance: false }, action) {
    switch (action.type) {
    case 'SHOW_ERRORS':
        {     
            let errors = [action.data]
            return Object.assign({}, { errorsList: errors}, { showReload: false });
        }
    case 'CLEAR_ALL':
        {     
            return Object.assign({}, { errorsList: [], clientErrorsExistance: false, showReload: false});
        }
     case 'SET_CLIENT_VALIDATION_ERRORS':
        {     
            return Object.assign({}, { errorsList: state.errorsList, clientErrorsExistance: true, showReload: false});
        }       
    default:
            return state;
    }
}