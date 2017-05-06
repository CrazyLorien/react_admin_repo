import React from 'react';
import { shallow } from 'enzyme'; // for get access to react instance
import sinon from 'sinon'; // for creating spy on functions we put in props
import Profile from '../profile/profile';
import expect from 'expect';

function setupCreate() {

    let props = {
        user: { name: 'test', password: 'test', Roles: [] },
        updateUser: () => { console.log('UpdateUser') },
        createUser: () => { console.log('CreateUser') },
        showLoader: false,
        errors: []
    }

    let updateSpy = sinon.spy(props, 'updateUser')
    let createSpy = sinon.spy(props, 'createUser')

    const enzymeWrapper = shallow( < Profile {...props }
        />)

        return {
            createSpy,
            updateSpy,
            props,
            enzymeWrapper
        }
    }


    function setupEdit() {

        let props = {
            user: { _id: 1, name: 'test', password: 'test', Roles: [] },
            updateUser: () => { console.log('UpdateUser') },
            createUser: () => { console.log('CreateUser') },
            showLoader: false,
            errors: []
        }

        let updateSpy = sinon.spy(props, 'updateUser')
        let createSpy = sinon.spy(props, 'createUser')

        const enzymeWrapper = shallow( < Profile {...props }
            />)

            return {
                createSpy,
                updateSpy,
                props,
                enzymeWrapper
            }
        }

        describe('components', () => {
            describe('Test profile', () => {
                it('should call create user action', () => {
                    const { enzymeWrapper, updateSpy, createSpy } = setupCreate()
                        //check 
                    let instance = enzymeWrapper.instance();
                    instance.handleSubmit({ preventDefault: function () {} });
                    expect(createSpy.callCount).toBe(1)

                })
            })

            describe('Test profile', () => {
                it('should call update user action', () => {
                    const { enzymeWrapper, updateSpy, createSpy } = setupEdit()
                        //check 
                    let instance = enzymeWrapper.instance();
                    instance.handleSubmit({ preventDefault: function () {} });
                    expect(updateSpy.callCount).toBe(1)
                })
            })
        })