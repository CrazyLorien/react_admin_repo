import React, {Component} from 'react';
import Profile from "../profile/profile";
import { connect, dispatch } from 'react-redux';
import  rolesAction  from '../action/role';
import permAction from '../action/permission';
import EditedRole from '../roles/editRole';

class EditedRoleContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){               
            this.props.getById(this.props.params.roleId); 
            this.props.getAllPermissions(); 
    }

     componentWillReceiveProps(props){
           this.props.getById(this.props.params.roleId); 
           this.props.getAllPermissions(); 
    }

    render() {
        return (
             <EditedRole role={this.props.editedRole} updateRole = {this.props.updateRole} permissions= { this.props.permissions} />
        );
    }
}

export default connect((state) => {
    return {
        editedRole : state.roles.editedRole,
        permissions : state.permissions.permissionsList
    }
}, function (dispatch) {
    return {
        getById: (id) => {
            dispatch(rolesAction.GET_ROLE_BY_ID(id))
        },
        updateRole: (role) => {
             dispatch(rolesAction.UPDATE_ROLE(role))
        },
        getAllPermissions : () => {
            dispatch(permAction.RECEIVE_ALL_PERMISSIONS())
        }
    }
})(EditedRoleContainer)