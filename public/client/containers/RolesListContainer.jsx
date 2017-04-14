import React, {Component} from 'react';
import ProfileList from "../profile/profilelist";
import { connect, dispatch } from 'react-redux';
import  rolesAction  from '../action/role';
import RolesList from '../roles/roleslist';


class RolesListContainer extends Component {
    state = {  }

    componentWillReceiveProps(props){
        if(props.roles === undefined || props.roles.length <= 1){
            this.props.getAll();
        }
    }


    render() {
        return (
           <RolesList roles={ this.props.roles }  />
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
        }
    }
})(RolesListContainer)