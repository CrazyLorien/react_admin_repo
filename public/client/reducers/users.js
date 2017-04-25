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
            return Object.assign({}, { usersList: users, editedUser: action.data });

        }
    case 'CREATE_USER':
        {
            let users = state.usersList.concat(action.data);
            return Object.assign({}, { usersList: users, editedUser: action.data });

        }
    case 'GET_USER_BY_ID':
        {
            let users = state.usersList.filter(x => x._id !== action.data._id).concat(action.data);
            let user = users.filter(x => x._id === action.data._id)[0];
            if (!user)
                user = {
                    Roles: [],
                    Images: []
                };
            return Object.assign({}, { usersList: state.usersList, editedUser: user });
        }
    case 'CLEAR_EDITED_USER':
        {
            let user = {
                Roles: [],
                Images: []
            };
            return Object.assign({}, { usersList: state.usersList, editedUser: user });
        }
    default:
        return state;
    }
}