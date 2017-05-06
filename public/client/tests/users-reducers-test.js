import { createStore, applyMiddleware } from 'redux';
import main from '../reducers/main';
import thunk from 'redux-thunk';
import constants from '../core/constants';
import expect from 'expect';

let store = createStore(main);

describe('users', () => {
    it('should be 2 users in the store after receive success', () => {
        store.dispatch({
            type: constants.RECEIVE_ALL_SUCCESS,
            data: [{ user: { name: 'first' } }, { user: { name: 'second' } }]
        });

        expect(store.getState().users.usersList.length).toEqual(2);
    });
});



describe('users', () => {
    it('get by name success', () => {
        store.dispatch({
            type: constants.GET_BY_NAME_SUCCESS,
            data: [{ _id: 0, name: 'third' }]
        });
        console.log(store.getState().users.usersList);
        expect(store.getState().users.usersList.length).toBeGreaterThan(0)
    });
});


describe('users', () => {
    it('get by id success', () => {
        store.dispatch({
            type: constants.GET_BY_ID_SUCCESS,
            data: [{ _id: 0, name: 'third' }]
        });
        console.log(store.getState().users.usersList);
        expect(store.getState().users.usersList.length).toBeGreaterThan(0)
    });
});

describe('users', () => {
    it('update user success', () => {
        store.dispatch({
            type: constants.GET_BY_ID_SUCCESS,
            data: [{ _id: 0, name: 'second' }]
        });

        store.dispatch({
            type: constants.UPDATE_USER_SUCCESS,
            data: [{ _id: 0, name: 'third' }]
        });

        let filtered = store.getState().users.usersList.filter(usr => usr.name == 'third');

        expect(filtered.length).toBeGreaterThan(0)
    });
});

describe('users', () => {
    it('create user  success', () => {
        store.dispatch({
            type: constants.CREATE_USER_SUCCESS,
            data: [{ _id: 0, name: 'third' }]
        });

        expect(store.getState().users.usersList.length).toBeGreaterThan(0)
    });
});

describe('users', () => {
    it('clear edited user  success', () => {
        store.dispatch({
            type: constants.GET_BY_ID_SUCCESS,
            data: [{ _id: 0, name: 'second' }]
        });
        store.dispatch({
            type: constants.CLEAR_EDITED_USER,
            data: [{ _id: 0, name: 'third' }]
        });
        expect(store.getState().users.editedUser._id == undefined).toBeTruthy()
    });
});