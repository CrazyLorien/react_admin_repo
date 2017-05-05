let rolesUrl = '/api/roles';
import constants from '../core/constants';

export default {
    RECEIVE_ALL_ROLES: function () {
        return (dispatch) => {
            dispatch({
                type: constants.RECEIVE_ALL_ROLES,
                apiPath: rolesUrl,
                reqType: 'GET'
            });
        }
    },
    GET_ROLE_BY_ID: function (id) {
        return (dispatch) => {
            dispatch({
                type: constants.GET_ROLE_BY_ID,
                apiPath: rolesUrl + '/' + id,
                reqType: 'GET'
            });
        }
    },
    UPDATE_ROLE: function (role) {
        return (dispatch) => {
            dispatch({
                type: constants.UPDATE_ROLE,
                apiPath: `${rolesUrl}/${role._id}/update`,
                reqType: 'PUT',
                data: role
            });
        }
    },
    CREATE_ROLE: function (role) {
        return (dispatch) => {
            dispatch({
                type: constants.CREATE_ROLE,
                apiPath: `${rolesUrl}/create`,
                reqType: 'POST',
                data: role
            });
        }
    },
    CLEAR_EDITED_ROLE: function () {
        return (dispatch) => {
            dispatch({
                type: constants.CLEAR_EDITED_ROLE,
                data: null
            })
        }
    }
};