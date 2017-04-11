import utils from '../utils/utils';

export default function users(state = { usersList: [] }, action) {
    switch (action.type) {
    case 'RECEIVE_ALL':
        {
            let users = action.data.concat();
            return Object.assign({}, { usersList: users });
        }
    case 'GET_ALL':
        {
            return state;
        }
    case 'GET_BY_NAME':
    case 'UPDATE_USER':
        {
            let users = state.usersList.filter(x => x._id !== action.data._id).concat(action.data);
            return Object.assign({}, { usersList: users });

        }
    case 'GET_BY_ID':
        {
            let user = state.usersList.filter(x => x._id === action.data)[0];
            return Object.assign({}, { usersList: users, editedUser: user });
        }
    default:
        return state;
    }
}