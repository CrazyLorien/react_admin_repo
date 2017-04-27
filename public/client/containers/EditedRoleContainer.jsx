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

    componentDidMount(){ 
       if(this.props.editedRole === undefined && this.props.params.roleId)  {              
            this.props.getById(this.props.params.roleId);   
        }
        else if(this.props.editedRole._id !== this.props.params.roleId)
        {
            this.props.getById(this.props.params.roleId);
        }
        
        else if(!this.props.params.roleId){
            this.props.setClientErrors();
            this.props.getById();
        }

        if(this.props.permissions.length <= 0){
           this.props.getAllPermissions();
        }
    }

     componentWillReceiveProps(props){
        if(props.editedRole === undefined && this.props.params.roleId){            
            this.props.getById(this.props.params.roleId); 
        }
        else if(this.props.editedRole._id !== this.props.params.roleId)
        {
            this.props.getById(this.props.params.roleId);
        }
        else if(props.editedRole._id !== undefined && !this.props.params.roleId){
           this.props.clearAll();
           this.props.router.push(`/adminprofile/editRole/${props.editedRole._id}`); 
        }


        if(props.permissions.length <= 0){
           this.props.getAllPermissions();
        }
    }

    render() {
        return (
             <EditedRole role={this.props.editedRole} updateRole = {this.props.updateRole} permissions= { this.props.permissions} createRole = { this.props.createRole} 
             errors = { this.props.errors } canSubmit = { this.props.clientErrors } setClientErrors= {  this.props.setClientErrors} clearAll={ this.props.clearAll} />
        );
    }
}

export default withRouter(connect((state) => {
    return {
        editedRole : state.roles.editedRole,
        permissions : state.permissions.permissionsList,
        errors: state.errors.errorsList,
        clientErrors: state.errors.clientErrorsExistance
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