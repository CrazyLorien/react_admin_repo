let permissionsUrl = '/api/permissions';
import constants from '../core/constants';

export default {
    RECEIVE_ALL_PERMISSIONS: function () {
        return (dispatch) => {
            dispatch({
                type: constants.RECEIVE_ALL_PERMISSIONS,
                apiPath: permissionsUrl,
                reqType: 'GET'
            });
        }
    },
    GET_PERMISSION_BY_ID: function (id) {
        return (dispatch) => {
            dispatch({
                type: constants.GET_PERMISSION_BY_ID,
                data: id
            })
        };
    },
    UPDATE_PERMISSION: function (pm) {
        return (dispatch) => {
            dispatch({
                type: constants.UPDATE_PERMISSION,
                apiPath: `${permissionsUrl}/${pm.id}/update`,
                reqType: 'PUT',
                data: pm
            });
        }
    },
    CREATE_PERMISSION: function (pm) {
        return (dispatch) => {
            dispatch({
                type: constants.CREATE_PERMISSION,
                apiPath: `${permissionsUrl}/create`,
                reqType: 'POST',
                data: pm
            });
        }
    }
}