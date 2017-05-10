import constants from '../core/constants';

const ajaxMiddleware = store => next => action => {
    if (!action.apiPath) return next(action)

    store.dispatch({
        type: action.type + '_START',
        data: null
    });

    $.ajax({
        url: `${action.apiPath}`,
        type: action.reqType,
        success: (resp) => {
            store.dispatch({
                type: action.type + '_SUCCESS',
                data: resp
            })
        },
        error: (resp) => {
            store.dispatch({
                type: action.type + '_FAIL',
                data: resp
            })
        },
        data: JSON.stringify(action.data),
        contentType: 'application/json;charset=utf-8'
    })
}

export default ajaxMiddleware