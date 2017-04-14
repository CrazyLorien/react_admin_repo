import utils from '../utils/utils';

export default function roles(state = { rolesList: [] }, action) {
    switch (action.type) {
    case 'RECEIVE_ALL_ROLES':
        {
            let roles = action.data.concat();
            return Object.assign({}, { rolesList: roles });
        }
    case 'UPDATE_ROLE':
        {
            let roles = state.rolesList.filter(x => x._id !== action.data._id).concat(action.data);
            return Object.assign({}, { rolesList: roles });

        }
    case 'GET_ROLE_BY_ID':
        {
            let role = state.rolesList.filter(x => x._id === action.data)[0];
            return Object.assign({}, { rolesList: state.rolesList, editedRole: role });
        }
    default:
        return state;
    }
}