let usersUrl = '/api/users';

export default {
    'GET_ALL': {
        type: 'GET_ALL',
        data: null
    },
    'RECEIVE_ALL': function () {
        return (dispatch) => {
            $.get(usersUrl).then(
                (resp) => {
                    dispatch({
                        type: 'RECEIVE_ALL',
                        data: resp
                    })

                }
            );
        };
    },
    'GET_BY_NAME': function (name) {
        return (dispatch) => {
            $.get(usersUrl + '/' + name).then(
                (resp) => {
                    dispatch({
                        type: 'GET_BY_NAME',
                        data: resp
                    })

                }
            );
        };
    },
    'GET_BY_ID': function (id) {
        return (dispatch) => {
            dispatch({
                type: 'GET_BY_ID',
                data: id
            })
        };
    },
    'UPDATE_USER': function (user) {
        return (dispatch) => {

            $.ajax({
                url: `${usersUrl}/${user.id}/update`,
                type: 'PUT',
                success: (resp) => {
                    dispatch({
                        type: 'UPDATE_USER',
                        data: resp
                    })
                },
                data: JSON.stringify(user),
                contentType: 'application/json;charset=utf-8'
            });
        }
    }
};