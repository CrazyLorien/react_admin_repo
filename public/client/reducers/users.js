export default function users(state = [], action) {
    switch (action.type) {
    case 'RECEIVE_ALL':
        {
            let newState = state.concat(action.data);
            return newState;
        }
    case 'GET_ALL':
        {
            return state;
        }
    case 'GET_BY_ID':
        {
            return state[users][id];
        }
    default:
        return state;
    }
}