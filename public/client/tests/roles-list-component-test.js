import React from 'react';
import { shallow } from 'enzyme'; // for get access to react instance
import sinon from 'sinon'; // for creating spy on functions we put in props
import { Roleslist } from '../roles/roleslist';
import expect from 'expect';

function setup() {

    let props = {
        roles: [],
        router: {
            push: function (param) {

            }
        },
        showLoader: false,
        clearRole: function () {

        }
    }

    let pushSpy = sinon.spy(props.router, 'push')
    let clearSpy = sinon.spy(props, 'clearRole');

    const enzymeWrapper = shallow( < Roleslist {...props }
        />)

        return {
            enzymeWrapper,
            pushSpy,
            clearSpy
        }
    }


    describe('components', () => {
        describe('Test roles list ', () => {
            it('should call redirect to edit role page', () => {
                const { enzymeWrapper, pushSpy } = setup()
                    //check 
                let instance = enzymeWrapper.instance();
                instance.handleEditClick({ _id: 0 });
                expect(pushSpy.callCount).toBe(1)
            })
        })

        describe('Test roles list list ', () => {
            it('should call redirect to create role page', () => {
                const { enzymeWrapper, pushSpy, clearSpy } = setup()
                    //check 
                let instance = enzymeWrapper.instance();
                instance.handleClickCreateRole();
                expect(pushSpy.callCount).toBe(1)
                expect(clearSpy.callCount).toBe(1)
            })
        })
    })