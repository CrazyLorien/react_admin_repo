export default function errors(state = { errorsList: [], clientErrorsExistance: false }, action) {
    switch (action.type) {
    case 'SHOW_ERRORS':
        {     
            let errors = [action.data]
            return Object.assign({}, { errorsList: errors});
        }
    case 'CLEAR_ALL':
        {     
            return Object.assign({}, { errorsList: [], clientErrorsExistance: false});
        }
     case 'SET_CLIENT_VALIDATION_ERRORS':
        {     
            return Object.assign({}, { errorsList: state.errorsList, clientErrorsExistance: true});
        }

        
        default:
            return state;
    }
}