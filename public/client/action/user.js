let usersUrl = '/api/users';
import constants from '../core/constants';

export default {
    RECEIVE_ALL: function() {
        return (dispatch) => {
            dispatch({
                type: constants.RECEIVE_ALL,
                apiPath: usersUrl,
                reqType: 'GET'
            });
        }
    },
    GET_BY_NAME: function(name) {
        return (dispatch) => {
            dispatch({
                type: constants.GET_BY_NAME,
                apiPath: usersUrl + '/name/' + name,
                reqType: 'GET'
            });
        };
    },
    GET_USER_BY_ID: function(id) {
        return (dispatch) => {
            dispatch({
                type: constants.GET_USER_BY_ID,
                apiPath: usersUrl + '/' + id,
                reqType: 'GET'
            });
        }
    },
    UPDATE_USER: function(user) {
        return (dispatch) => {
            dispatch({
                type: constants.UPDATE_USER,
                apiPath: `${usersUrl}/${user.id}/update`,
                reqType: 'PUT',
                data: user
            });
        }
    },
    CREATE_USER: function(user) {
        return (dispatch) => {
            dispatch({
                type: constants.CREATE_USER,
                apiPath: `${usersUrl}/create`,
                reqType: 'POST',
                data: user
            });
        }
    },
    CLEAR_EDITED_USER: function() {
        return (dispatch) => {
            dispatch({
                type: constants.CLEAR_EDITED_USER,
                data: null
            })
        }
    },
    UPDATE_CLIENT_USER: function(user) {
        return (dispatch) => {
            dispatch({
                type: constants.UPDATE_CLIENT_USER,
                data: user
            })
        }
    }
};