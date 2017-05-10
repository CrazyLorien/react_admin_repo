import React from 'react';
import { shallow } from 'enzyme'; // for get access to react instance
import sinon from 'sinon'; // for creating spy on functions we put in props
import { ProfileList } from '../profile/profilelist';
import expect from 'expect';

function setup() {

    let props = {
        router: {
            push: function (param) {

            }
        },
        showLoader: true,
        clearUser: function () {

        }
    }

    let pushSpy = sinon.spy(props.router, 'push')
    let clearSpy = sinon.spy(props, 'clearUser');

    const enzymeWrapper = shallow( < ProfileList {...props }
        />)

        return {
            enzymeWrapper,
            pushSpy,
            clearSpy
        }
    }


    describe('components', () => {
        describe('Test profile list', () => {
            it('should call redirect to edit user page', () => {
                const { enzymeWrapper, pushSpy } = setup()
                    //check 
                let instance = enzymeWrapper.instance();
                instance.handleEditClick({ _id: 0 });
                expect(pushSpy.callCount).toBe(1)
            })
        })

        describe('Test profile list ', () => {
            it('should call redirect to create user page', () => {
                const { enzymeWrapper, pushSpy, clearSpy } = setup()
                    //check 
                let instance = enzymeWrapper.instance();
                instance.handleCreateClick();
                expect(pushSpy.callCount).toBe(1)
                expect(clearSpy.callCount).toBe(1)
            })
        })
    })