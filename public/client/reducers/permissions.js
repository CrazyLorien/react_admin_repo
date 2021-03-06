export default function permissions(state = { permissionsList: [] }, action) {
    switch (action.type) {
    case 'RECEIVE_ALL_PERMISSIONS_START':
    case 'UPDATE_PERMISSION_START':
    case 'CREATE_PERMISSION_START':
        {
            return Object.assign({}, { permissionsList: state.permissionsList, editedPermission: state.editedPermission || {}, visibility: false });
        }
    case 'RECEIVE_ALL_PERMISSIONS_SUCCESS':
        {
            let pms = action.data.concat();
            return Object.assign({}, { permissionsList: pms });
        }
    case 'UPDATE_PERMISSION_SUCCESS':
        {
            let pms = state.permissionsList.filter(x => x._id !== action.data._id).concat(action.data);
            return Object.assign({}, { permissionsList: pms });

        }
    case 'CREATE_PERMISSION_SUCCESS':
        {
            let pms = state.permissionsList.concat(action.data);
            return Object.assign({}, { permissionsList: pms });
        }
    case 'GET_PERMISSION_BY_ID':
        {
            let pm = state.permissionsList.filter(x => x._id === action.data)[0];
            if (!pm)
                pm = {};
            return Object.assign({}, { permissionsList: state.permissionsList, editedPermission: pm, visibility: true });
        }
    default:
        return state;
    }
}