import React, {Component} from 'react';
import  ProfileList   from "../profile/profilelist";
import { connect, dispatch } from 'react-redux';
import  usersAction  from '../action/user';
import AuthService from '../authenticate/auth-service';

class UsersContainer extends Component {
    componentWillMount(){
        if(this.props.users.length <= 1){
            this.props.getAll();
        }
    }

    componentWillReceiveProps(props){
        if(props.users !== null && this.props.users !== null)
            if(props.users.length < this.props.users.length)
                this.props.getAll();       
    }

    render() {
        return (
            <ProfileList users={this.props.users} clearUser={this.props.clearEditedUser} errors={ this.props.errors} showLoader={this.props.showLoader} />
        );
    }
}



export default connect((state) => {
    return {
        users : state.users.usersList,
        errors: state.errors.errorsList,
        showLoader: state.users.showReload
    }
}, function (dispatch) {
    return {
        getAll: () => {
            dispatch(usersAction.RECEIVE_ALL())
        },
        clearEditedUser: () => {
            dispatch(usersAction.CLEAR_EDITED_USER())
        }
    }
})(UsersContainer)