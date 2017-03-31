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
    'UPDATE_USER': function (name) {
        return (dispatch) => {
            $.post(usersUrl + '/' + name).then(
                (resp) => {
                    dispatch({
                        type: 'UPDATE_USER',
                        data: resp
                    })

                }
            );
        };
    }
};