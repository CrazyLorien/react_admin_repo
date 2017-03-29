export default {
    'GET_ALL': {
        type: 'GET_ALL',
        data: null
    },
    'RECEIVE_ALL': function () {
        return fetch('http://localhost:3000/users') // todo add variable from server or in config file
            .then(function (response) {
                return {
                    type: 'RECEIVE_ALL',
                    data: response
                }
            }).catch((err) => console.log(err))

    }
}