import utils from '../utils/utils';

export default function roles(state = { rolesList: [], showReload: true }, action) {
    switch (action.type) {
    case 'RECEIVE_ALL_ROLES_START':
    case 'UPDATE_ROLE_START':
    case 'CREATE_ROLE_START':
    case 'GET_ROLE_BY_ID_START':
    case 'CREATE_ROLE_START':
    case 'GET_ROLE_BY_ID_START':
        {
            return Object.assign({}, { rolesList: state.rolesList, editedRole: state.editedRole || { Permissions: [] } }, { showReload: true });
        }
    case 'RECEIVE_ALL_ROLES_SUCCESS':
        {
            let roles = action.data.concat();
            let role = { Permissions: [] };
            return Object.assign({}, { rolesList: roles, editedRole: role, showReload: false });
        }
    case 'UPDATE_ROLE_SUCCESS':
        {
            let roles = state.rolesList.filter(x => x._id !== action.data._id).concat(action.data);
            return Object.assign({}, { rolesList: roles, editedRole: action.data, showReload: false });
        }
    case 'CREATE_ROLE_SUCCESS':
        {
            let roles = state.rolesList.concat(action.data);
            return Object.assign({}, { rolesList: roles, editedRole: action.data, showReload: false });
        }
    case 'GET_ROLE_BY_ID_SUCCESS':
        {
            let roles = state.rolesList.filter(x => x._id !== action.data._id).concat(action.data);
            let role = roles.filter(x => x._id === action.data._id)[0];
            if (!role)
                role = { Permissions: [] };

            return Object.assign({}, { rolesList: roles, editedRole: role, showReload: false });
        }
    case 'CLEAR_EDITED_ROLE':
        {
            let role = { Permissions: [] };
            return Object.assign({}, { rolesList: state.rolesList, editedRole: role });
        }
    case 'GET_ROLE_BY_ID_FAIL':
        {
            return Object.assign({}, { rolesList: state.rolesList, editedRole: state.editedRole, showReload: false });
        }

    default:
        return state;
    }
}