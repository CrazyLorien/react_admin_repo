import utils from '../utils/utils';

export default function roles(state = { rolesList: [] }, action) {
    switch (action.type) {
    case 'RECEIVE_ALL_ROLES':
        {
            let roles = action.data.concat();
            let role = { Permissions: [] };
            return Object.assign({}, { rolesList: roles, editedRole: role });
        }
    case 'UPDATE_ROLE':
        {
            let roles = state.rolesList.filter(x => x._id !== action.data._id).concat(action.data);
            return Object.assign({}, { rolesList: roles, editedRole: action.data });

        }
    case 'CREATE_ROLE':
        {
            let roles = state.rolesList.concat(action.data);
            return Object.assign({}, { rolesList: roles, editedRole: action.data });

        }
    case 'GET_ROLE_BY_ID':
        {
            let roles = state.rolesList.filter(x => x._id !== action.data._id).concat(action.data);
            let role = roles.filter(x => x._id === action.data._id)[0];
            if (!role)
                role = { Permissions: [] };

            return Object.assign({}, { rolesList: roles, editedRole: role });
        }
    case 'CLEAR_EDITED_ROLE':
        {
            let role = { Permissions: [] };
            return Object.assign({}, { rolesList: state.rolesList, editedRole: role });
        }
    default:
        return state;
    }
}