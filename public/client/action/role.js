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
            dispatch({
                type: 'GET_ROLE_BY_ID',
                data: id
            })
        };
    },
    'UPDATE_ROLE': function (user) {
        return (dispatch) => {

            $.ajax({
                url: `${rolesUrl}/${user._id}/update`,
                type: 'PUT',
                success: (resp) => {
                    dispatch({
                        type: 'UPDATE_ROLE',
                        data: resp
                    })
                },
                data: JSON.stringify(user),
                contentType: 'application/json;charset=utf-8'
            });
        }
    }
};