let rolesUrl = '/api/roles';
export default {
    'RECEIVE_ALL_ROLES': function () {
        return (dispatch) => {
            $.get(rolesUrl).then(
                (resp) => {
                    dispatch({
                        type: 'RECEIVE_ALL_ROLES',
                        data: resp
                    })

                }
            );
        };
    },
    'GET_ROLE_BY_ID': function (id) {
        return (dispatch) => {
            $.get(rolesUrl + '/' + id).then(
                (resp) => {
                    dispatch({
                        type: 'GET_ROLE_BY_ID',
                        data: resp
                    })

                }
            );
        }
    },
    'UPDATE_ROLE': function (role) {
        return (dispatch) => {

            $.ajax({
                url: `${rolesUrl}/${role._id}/update`,
                type: 'PUT',
                success: (resp) => {
                    dispatch({
                        type: 'UPDATE_ROLE',
                        data: resp
                    })
                },
                data: JSON.stringify(role),
                contentType: 'application/json;charset=utf-8'
            });
        };
    },
    'CREATE_ROLE': function (role) {
        return (dispatch) => {

            $.ajax({
                url: `${rolesUrl}/create`,
                type: 'POST',
                success: (resp) => {
                    dispatch({
                        type: 'CREATE_ROLE',
                        data: resp
                    })
                },
                error: (err) => {
                    dispatch({
                        type: 'SHOW_ERRORS',
                        data: err.responseJSON
                    })
                },
                data: JSON.stringify(role),
                contentType: 'application/json;charset=utf-8'
            });
        }
    },
    'CLEAR_EDITED_ROLE': function () {
        return (dispatch) => {
            dispatch({
                type: 'CLEAR_EDITED_ROLE',
                data: null
            })
        }
    }
};