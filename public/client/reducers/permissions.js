export default function permissions(state = { permissionsList: [] }, action) {
    switch (action.type) {
    case 'RECEIVE_ALL_PERMISSIONS':
        {
            let pms = action.data.concat();
            return Object.assign({}, { permissionsList: pms });
        }
    default:
        return state;
    }
}