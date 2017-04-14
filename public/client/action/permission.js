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
    }
}