let usersUrl = '/api/users';
import constants from '../core/constants';

export default {
    GET_ALL: {
        type: GET_ALL,
        data: null
    },
    RECEIVE_ALL: function () {
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
    GET_BY_NAME: function (name) {
        return (dispatch) => {
            $.get(usersUrl + '/name/' + name).then(
                (resp) => {
                    dispatch({
                        type: GET_BY_NAME,
                        data: resp
                    })

                }
            );
        };
    },
    GET_USER_BY_ID: function (id) {
        return (dispatch) => {
            $.get(usersUrl + '/' + id).then(
                (resp) => {
                    dispatch({
                        type: GET_USER_BY_ID,
                        data: resp
                    })

                }
            );
        }
    },
    UPDATE_USER: function (user) {
        return (dispatch) => {

            $.ajax({
                url: `${usersUrl}/${user.id}/update`,
                type: 'PUT',
                success: (resp) => {
                    dispatch({
                        type: UPDATE_USER,
                        data: resp
                    })
                },
                data: JSON.stringify(user),
                contentType: 'application/json;charset=utf-8'
            });
        }
    },
    CREATE_USER: function (user) {
        return (dispatch) => {
            $.ajax({
                url: `${usersUrl}/create`,
                type: 'POST',
                success: (resp) => {
                    dispatch({
                        type: CREATE_USER,
                        data: resp
                    })
                },
                data: JSON.stringify(user),
                contentType: 'application/json;charset=utf-8'
            });
        }
    },
    CLEAR_EDITED_USER: function () {
        return (dispatch) => {
            dispatch({
                type: CLEAR_EDITED_USER,
                data: null
            })
        }
    }
};