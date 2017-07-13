import React from 'react';
import { shallow } from 'enzyme'; // for get access to react instance
import sinon from 'sinon'; // for creating spy on functions we put in props
import PermissionCreator from '../permissions/permission-creator';
import expect from 'expect';

let edit_permission = {
    _id: 1,
    name: 'test'
}
let create_permission = {
    name: 'test'
}

function setup(pm) {
    let props = {
        permission: pm,
        editPermission: function () {},
        createPermission: function () {},
        canSubmit: true,
        setClientErrorrs: function () {},
        clearAll: function () {}
    }

    let editSpy = sinon.spy(props, 'editPermission');
    let createSpy = sinon.spy(props, 'createPermission');

    let wrapper = shallow( < PermissionCreator {...props }
        />)

        return {
            wrapper,
            editSpy,
            createSpy
        }
    }

    function setupJsDomTest() {
        let props = {
            permission: undefined,
        }

        let wrapper = shallow( < PermissionCreator {...props }
            /> )

            return { wrapper }
        }


        describe('componnets', () => {
            describe('permissions creator', () => {
                it('should call edit permission', () => {
                    const { wrapper, editSpy, createSpy } = setup(edit_permission)

                    let instance = wrapper.instance();
                    instance.componentDidMount()
                    instance.handleSubmit();

                    expect(editSpy.callCount).toBe(1)
                })
            })

            describe('permissions creator', () => {
                it('should call edit permission', () => {
                    const { wrapper, editSpy, createSpy } = setup(create_permission)
                    let instance = wrapper.instance();

                    instance.componentDidMount()
                    instance.handleSubmit();

                    expect(createSpy.callCount).toBe(1)
                })
            })
        })