import { createStore, applyMiddleware } from 'redux';
import main from '../reducers/main';
import thunk from 'redux-thunk';
import constants from '../core/constants';
import expect from 'expect';

let store = createStore(main);

describe('roles', () => {
    it('should be 2 roles in the store after receive success', () => {
        store.dispatch({
            type: constants.RECEIVE_ALL_ROLES_SUCCESS,
            data: [{ name: 'first', Permissions: [] }, { name: 'second', Permissions: [] }]
        });

        expect(store.getState().roles.rolesList.length).toEqual(2);
    });
});


describe('roles', () => {
    it('get role by id success', () => {
        store.dispatch({
            type: constants.GET_ROLE_BY_ID_SUCCESS,
            data: [{ _id: 0, name: 'third', Permissions: [] }]
        });
        expect(store.getState().roles.rolesList.length).toBeGreaterThan(0)
    });
});

describe('roles', () => {
    it('create role  success', () => {
        store.dispatch({
            type: constants.CREATE_ROLE_SUCCESS,
            data: [{ name: 'third', Permissions: [] }]
        });

        expect(store.getState().roles.rolesList.length).toBeGreaterThan(0)
    });
});

describe('roles', () => {
    it('clear edited role  success', () => {
        store.dispatch({
            type: constants.GET_ROLE_BY_ID_SUCCESS,
            data: [{ _id: 0, name: 'second', Permissions: [] }]
        });
        store.dispatch({
            type: constants.CLEAR_EDITED_ROLE,
            data: null
        });
        expect(store.getState().roles.editedRole._id == undefined).toBeTruthy()
    });
});