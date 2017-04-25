import React, {Component} from 'react';
import { connect, dispatch } from 'react-redux';
import  rolesAction  from '../action/role';
import permAction from '../action/permission';
import PermissionsList from '../permissions/permissions-list';
import PermissionCreator from '../permissions/permission-creator';
import errorsAction from '../action/error';


class PermissionsContainer extends Component {
    state = {  }

    componentDidMount(){
        if(this.props.permissions.length <= 0 ){
            this.props.getAll();
        }
    }

    componentWillReceiveProps(props){
        if(props.permissions.length <= 0 ){
            this.props.getAll();
        }
    }

    render() {
        return (
            <div>
                <PermissionsList permissions = { this.props.permissions } getPermissionById={this.props.getPermissionById} setClientErrors = { this.props.setClientErrors}></PermissionsList>
                {
                   this.props.visibility
                    ? 
                        <PermissionCreator permission={this.props.editedPermission} editPermission={this.props.editPermission} 
                            createPermission={this.props.createPermission}  canSubmit={ this.props.clienterrors }
                            setClientErrors ={ this.props.setClientErrors}  clearAll={ this.props.clearAll}>
                        </PermissionCreator> 
                    : <div></div>
                }                
            </div>         
        );
    }
}

export default connect((state) => {
    return {
        visibility : state.permissions.visibility,
        permissions : state.permissions.permissionsList,
        editedPermission : state.permissions.editedPermission,
        errors: state.errors.errorsList,
        clienterrors: state.errors.clientErrorsExistance
    }
}, function (dispatch) {
    return {
        getAll: () => {
            dispatch(permAction.RECEIVE_ALL_PERMISSIONS())
        },
        editPermission: (perm) => {
            dispatch(permAction.UPDATE_PERMISSION(perm))
        },
        createPermission: (perm) => {
            dispatch(permAction.CREATE_PERMISSION(perm))
        },
        getPermissionById:(id) =>{
            dispatch(permAction.GET_PERMISSION_BY_ID(id))
        },
        setClientErrors: () => {
            dispatch(errorsAction.SET_CLIENT_VALIDATION_ERRORS())
        },
        clearAll: () => {
            dispatch(errorsAction.CLEAR_ALL())
        }
    }
})(PermissionsContainer)



