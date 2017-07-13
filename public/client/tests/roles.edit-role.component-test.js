import React from 'react';
import { shallow, mount, render } from 'enzyme'; // for get access to react instance
import sinon from 'sinon'; // for creating spy on functions we put in props
import EditedRole from '../roles/editRole';
import expect from 'expect';

function setupCreate() {

    let props = {
        role: { name: 'testRole', Permissions: [] },
        updateRole: () => { console.log('UpdateRole') },
        createRole: () => { console.log('CreateRole') },
        showLoader: false,
        errors: [],
        permissions: []
    }

    let updateSpy = sinon.spy(props, 'updateRole')
    let createSpy = sinon.spy(props, 'createRole')

    const enzymeWrapper = shallow( < EditedRole {...props }
        />)

        return {
            createSpy,
            updateSpy,
            props,
            enzymeWrapper
        }
    }


    function setupEdit(showLoader) {

        let props = {
            role: { _id: 1, name: 'testRole', Permissions: [] },
            updateRole: () => { console.log('UpdateRole') },
            createRole: () => { console.log('CreateRole') },
            showLoader: showLoader,
            errors: [],
            permissions: []
        }

        let updateSpy = sinon.spy(props, 'updateRole')
        let createSpy = sinon.spy(props, 'createRole')

        const enzymeWrapper = shallow( < EditedRole {...props }
            />)

            return {
                createSpy,
                updateSpy,
                props,
                enzymeWrapper
            }
        }

        function setupLoader() {
            let props = {
                role: undefined,
                showLoader: false,
                errors: [],
                permissions: []
            }

            const enzymeWrapper = mount( < EditedRole {...props }
                />)

                return {
                    props,
                    enzymeWrapper
                }
            }

            describe('components', () => {
                describe('Test edit role component', () => {
                    it('should call create role action', () => {
                        const { enzymeWrapper, updateSpy, createSpy } = setupCreate()
                            //check 
                        let instance = enzymeWrapper.instance();
                        instance.handlePermissionsChange({ preventDefault: function () {} });
                        expect(createSpy.callCount).toBe(1)

                    })
                })

                describe('Test edit role componnet', () => {
                    it('should call update role action', () => {
                        const { enzymeWrapper, updateSpy, createSpy } = setupEdit()
                            //check 
                        let instance = enzymeWrapper.instance();
                        instance.handlePermissionsChange({ preventDefault: function () {} });
                        expect(updateSpy.callCount).toBe(1)
                    })
                })

                describe('Test edit role componnet', () => {
                    it('should display loader if loader is false but role is undefined ', () => {
                        const { enzymeWrapper, updateSpy, createSpy } = setupEdit()
                            //check 
                        let instance = enzymeWrapper.instance();
                        instance.handlePermissionsChange({ preventDefault: function () {} });
                        expect(updateSpy.callCount).toBe(1)
                    })
                })

                describe('Test edit role componnet', () => {
                    it('should display loader if loader is false but role is undefined ', () => {
                        const { enzymeWrapper } = setupLoader(false)
                            //check 
                        console.log(enzymeWrapper.find)
                        expect(enzymeWrapper.find('div.loader').length).toBe(1)
                    })
                })

                describe('Test edit role componnet', () => {
                    it('should display loader if loader is false but role is undefined ', () => {
                        const { enzymeWrapper } = setupLoader(true)
                            //check 
                        console.log(enzymeWrapper.find)
                        expect(enzymeWrapper.find('div.loader').length).toBe(1)
                    })
                })
            })