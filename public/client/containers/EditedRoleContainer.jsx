import React, {Component} from 'react';
import Profile from "../profile/profile";
import { connect, dispatch } from 'react-redux';
import rolesAction  from '../action/role';
import permAction from '../action/permission';
import errorsAction from '../action/error';
import EditedRole from '../roles/editRole';

import { Router, Route, Link, withRouter  } from 'react-router';

class EditedRoleContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){ 
        if(this.props.editedRole._id === undefined && this.props.params.roleId)  {              
            this.props.getById(this.props.params.roleId);   
        }

        if(this.props.permissions.length <= 0){
           this.props.getAllPermissions();
        }
    }

    componentWillReceiveProps(props){
        if(this.props.editedRole._id === undefined && this.props.params.roleId)  {              
            this.props.getById(this.props.params.roleId);   
        }
    }

    render() {
        return (
             <EditedRole role={this.props.editedRole} 
                         updateRole = {this.props.updateRole} 
                         permissions= { this.props.permissions} 
                         createRole = { this.props.createRole} 
                         errors = { this.props.errors }
                         setClientErrors= { this.props.setClientErrors} 
                         showLoader = { this.props.showLoader }
                         isErrors = { this.props.clientErrors }
                         clearAll = { this.props.clearAll }
                         setClientErrors = { this.props.setClientErrors }
                          />
        );
    }
}

export default withRouter(connect((state) => {
    return {
        editedRole : state.roles.editedRole,
        permissions : state.permissions.permissionsList,
        errors: state.errors.errorsList,
        clientErrors: state.errors.clientErrorsExistance,
        showLoader: state.roles.showReload
    }
}, function (dispatch) {
    return {
        getById: (id) => {
            dispatch(rolesAction.GET_ROLE_BY_ID(id))
        },
        updateRole: (role) => {
             dispatch(rolesAction.UPDATE_ROLE(role))
        },
        createRole: (role) => {
            dispatch(rolesAction.CREATE_ROLE(role))
        },
        getAllPermissions : () => {
            dispatch(permAction.RECEIVE_ALL_PERMISSIONS())
        },
        clearAll: () => {
            dispatch(errorsAction.CLEAR_ALL())
        },
        setClientErrors: () => {
            dispatch(errorsAction.SET_CLIENT_VALIDATION_ERRORS())
        },
    }
})(EditedRoleContainer))