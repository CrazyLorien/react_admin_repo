let permissionsUrl = '/api/permissions';
export default {
    'RECEIVE_ALL_PERMISSIONS': function () {
        return (dispatch) => {
            $.get(permissionsUrl).then(
                (resp) => {
                    dispatch({
                        type: 'RECEIVE_ALL_PERMISSIONS',
                        data: resp
                    })

                }
            );
        };
    },
    'GET_PERMISSION_BY_ID': function (id) {
        return (dispatch) => {
            dispatch({
                type: 'GET_PERMISSION_BY_ID',
                data: id
            })
        };
    },
    'UPDATE_PERMISSION': function (pm) {
        return (dispatch) => {

            $.ajax({
                url: `${permissionsUrl}/${pm.id}/update`,
                type: 'PUT',
                success: (resp) => {
                    dispatch({
                        type: 'UPDATE_PERMISSION',
                        data: resp
                    })
                },
                data: JSON.stringify(pm),
                contentType: 'application/json;charset=utf-8'
            });
        }
    },
    'CREATE_PERMISSION': function (pm) {
        return (dispatch) => {

            $.ajax({
                url: `${permissionsUrl}/create`,
                type: 'POST',
                success: (resp) => {
                    dispatch({
                        type: 'CREATE_PERMISSION',
                        data: resp
                    })
                },
                data: JSON.stringify(pm),
                contentType: 'application/json;charset=utf-8'
            });
        }
    }
}