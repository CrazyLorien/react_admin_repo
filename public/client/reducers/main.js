import { combineReducers } from 'redux';
import users from './users';
import roles from './roles';
import permissions from './permissions';

export default combineReducers({
    users,
    roles,
    permissions
})