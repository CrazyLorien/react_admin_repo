import { createStore, applyMiddleware } from 'redux';
import main from '../reducers/main';
import thunk from 'redux-thunk';
import constants from '../core/constants';
import expect from 'expect';

let store = createStore(main);

describe('permissions', () => {
    it('should be 2 roles in the store after receive success', () => {
        store.dispatch({
            type: constants.RECEIVE_ALL_PERMISSIONS_SUCCESS,
            data: [{ name: 'first' }, { name: 'second' }, { name: 'last' }]
        });

        expect(store.getState().permissions.permissionsList.length).toEqual(3);
    });
});


describe('permissions', () => {
    it('get permission by id success', () => {
        store.dispatch({
            type: constants.GET_PERMISSION_BY_ID,
            data: [{ name: 'third' }]
        });
        expect(store.getState().permissions.permissionsList.length).toBeGreaterThan(0)
    });
});

describe('permissions', () => {
    it('create permission success', () => {
        store.dispatch({
            type: constants.CREATE_PERMISSION_SUCCESS,
            data: [{ name: 'third' }]
        });

        expect(store.getState().permissions.permissionsList.length).toBeGreaterThan(0)
    });
});


describe('permissions', () => {
    it('update permission  success', () => {
        store.dispatch({
            type: constants.UPDATE_PERMISSION_SUCCESS,
            data: [{ name: 'third', Permissions: [] }]
        });

        expect(store.getState().permissions.permissionsList.length).toBeGreaterThan(0)
    });
});