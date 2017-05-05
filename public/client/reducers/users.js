import utils from '../utils/utils';

export default function users(state = { usersList: [], showReload: true }, action) {
    switch (action.type) {
    case 'RECEIVE_ALL_START':
        {
            return Object.assign({}, { usersList: state.usersList, showReload: true });
        }
    case 'RECEIVE_ALL_SUCCESS':
        {
            let users = action.data.concat();
            return Object.assign({}, { usersList: users }, { showReload: false });
        }
    case 'GET_BY_NAME_START':
    case 'UPDATE_USER_START':
        {
            return Object.assign({}, { usersList: state.usersList, editedUser: state.editedUser }, { showReload: true });
        }
    case 'GET_BY_NAME_SUCCESS':
    case 'UPDATE_USER_SUCCESS':
        {
            let users = state.usersList.filter(x => x._id !== action.data._id).concat(action.data);
            return Object.assign({}, { usersList: users, editedUser: action.data, showReload: false });
        }
    case 'CREATE_USER_START':
        {
            return Object.assign({}, { usersList: state.usersList, editedUser: state.editedUser, showReload: true });
        }
    case 'CREATE_USER_SUCCESS':
        {
            let users = state.usersList.concat(action.data);
            return Object.assign({}, { usersList: users, editedUser: action.data, showReload: false });
        }
    case 'GET_USER_BY_ID_START':
        {
            return Object.assign({}, {
                usersList: state.usersList,
                editedUser: state.editedUser || {
                    Roles: [],
                    Images: []
                },
                showReload: true
            });
        }
    case 'GET_USER_BY_ID_SUCCESS':
        {
            let users = state.usersList;
            let user = {
                Roles: [],
                Images: []
            };
            if (action.data !== undefined) { //user creation
                users = state.usersList.filter(x => x._id !== action.data._id).concat(action.data);
                user = users.filter(x => x._id === action.data._id)[0];
            }

            return Object.assign({}, { usersList: users, editedUser: user, showReload: false });
        }
    case 'CLEAR_EDITED_USER':
        {
            let user = {
                Roles: [],
                Images: []
            };
            return Object.assign({}, { usersList: state.usersList, editedUser: user });
        }
    case 'GET_USER_BY_ID_FAIL':
        {
            return Object.assign({}, { rolesList: state.usersList, editedRole: state.editedUser, showReload: false });
        }
    default:
        return state;
    }
}