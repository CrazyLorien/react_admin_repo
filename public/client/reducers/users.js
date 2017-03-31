import utils from '..//utils//utils';

export default function users(state = [], action) {
    switch (action.type) {
    case 'RECEIVE_ALL':
        {
            return state.concat(action.data);
        }
    case 'GET_ALL':
        {
            return state;
        }
    case 'GET_BY_NAME':
    case 'UPDAT_USER':
        {
            return state.concat(action.data).filter(x => x.name == action.data.name);
        }

    default:
        return state;
    }
}