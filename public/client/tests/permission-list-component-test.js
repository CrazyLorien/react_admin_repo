import React from 'react';
import { shallow } from 'enzyme'; // for get access to react instance
import sinon from 'sinon'; // for creating spy on functions we put in props
import PermissionsList from '../permissions/permissions-list';
import expect from 'expect';

function setup() {
    let props = {
        permissions: [],
        setClientErrors: function () {

        },
        getPermissionById: function () {

        }
    }

    let clientErrorsSpy = sinon.spy(props, 'setClientErrors')
    let permissionsSpy = sinon.spy(props, 'getPermissionById');

    const enzymeWrapper = shallow( < PermissionsList {...props }
        />)

        return {
            enzymeWrapper,
            clientErrorsSpy,
            permissionsSpy
        }
    }

    describe('components', () => {
        describe('Permissions list ', () => {
            it('should call getbyid action and setClientErrors', () => {
                const { enzymeWrapper, clientErrorsSpy, permissionsSpy } = setup()
                    //check 
                let instance = enzymeWrapper.instance();
                instance.handleClick();
                expect(clientErrorsSpy.callCount).toBe(1)
                expect(permissionsSpy.callCount).toBe(1)
            })
        })

        describe('Test permissions list', () => {
            it('should call getbyid', () => {
                const { enzymeWrapper, clientErrorsSpy, permissionsSpy } = setup()
                    //check 
                let instance = enzymeWrapper.instance();
                instance.handleClick({ name: 'tets' });
                expect(clientErrorsSpy.callCount).toBe(0)
                expect(permissionsSpy.callCount).toBe(1)
            })
        })
    })