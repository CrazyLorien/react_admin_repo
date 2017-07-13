import React from 'react';
import { shallow } from 'enzyme'; // for get access to react instance
import sinon from 'sinon'; // for creating spy on functions we put in props
import ChooseRoles from '../roles/ChooseRoles';
import expect from 'expect';


let Roles = [{ name: "test", Permissions: ['test', 'test1'] }];
let UserRoles = ['test', 'test1', 'test2', 'test3'];

function setupShowRole(roles, userRoles) {

    let props = {
        roles: roles,
        userRoles: userRoles,
        handleCheck: function () {},
        errors: []
    }

    let handleSpy = sinon.spy(props, 'handleCheck')


    const enzymeWrapper = shallow( < ChooseRoles {...props }
        />)

        return {
            handleSpy,
            props,
            enzymeWrapper
        }
    }

    describe('Roles components', () => {
        describe('Test role ', () => {
            it('should call handleCheck action ', () => {
                const { enzymeWrapper, handleSpy } = setupShowRole(Roles, UserRoles)
                let instance = enzymeWrapper.instance();
                instance.handleCheck();
                expect(handleSpy.callCount).toBe(1)

            })
        })

        describe('Test role', () => {
            it('should not show main componet without all  data', () => {
                const { enzymeWrapper } = setupShowRole();
                expect(enzymeWrapper.find('.user-roles-container').length).toBe(0)
            })
        })

        describe('Test role', () => {
            it('should not show main componet without userRoles', () => {
                const { enzymeWrapper } = setupShowRole(Roles);
                expect(enzymeWrapper.find('.user-roles-container').length).toBe(0)
            })
        })

        describe('Test role', () => {
            it('should not show main componet without Roles', () => {
                const { enzymeWrapper } = setupShowRole(undefined, UserRoles);
                expect(enzymeWrapper.find('.user-roles-container').length).toBe(0)
            })
        })
    })