import React, {Component} from 'react';
import ProfileList from "../profile/profilelist";
import { connect, dispatch } from 'react-redux';
import  rolesAction  from '../action/role';
import ChooseRoles from '../roles/chooseRoles';


class RolesContainer extends Component {
    state = {  }

    componentDidMount(){
        if(this.props.roles === undefined || this.props.roles.length <= 0){
            this.props.getAll();
        }
    }

    componentWillReceiveProps(props){
        if(props.roles === undefined || props.roles.length <= 0){
            this.props.getAll();
        }
    }


    render() {
        return (
           <ChooseRoles 
                    user = { this.props.user}
                    roles={ this.props.roles }
                    userRoles = { this.props.userRoles }
                    updateClientUser =  { this.props.updateClientUser }
                    />
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
})(RolesContainer)