import React, {Component} from 'react';
import ProfileList from "../profile/profilelist";
import { connect, dispatch } from 'react-redux';
import  rolesAction  from '../action/role';
import RolesList from '../roles/roleslist';


class RolesListContainer extends Component {
    state = {  }

    componentWillMount(){
        if(this.props.roles === undefined || this.props.roles.length <= 1){
            this.props.getAll();
        }
    }

    componentWillReceiveProps(props){
        if(props.roles === undefined || props.roles.length <= 1){
            this.props.getAll();
        }
    }


    render() {
        return (
           <RolesList roles={ this.props.roles }  clearRole={this.props.clearEditedRole} />
        );
    }
}

export default connect((state) => {
    return {
        roles : state.roles.rolesList
    }
}, function (dispatch) {
    return {
        getAll: () => {
            dispatch(rolesAction.RECEIVE_ALL_ROLES())
        },
        clearEditedRole: () => {
            dispatch(rolesAction.CLEAR_EDITED_ROLE())
        }
    }
})(RolesListContainer)