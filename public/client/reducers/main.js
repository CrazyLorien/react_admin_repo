import { combineReducers } from 'redux';
import users from './users';
import roles from './roles';
import errors from './errors';
import permissions from './permissions';

export default combineReducers({
    users,
    roles,
    permissions,
    errors
})