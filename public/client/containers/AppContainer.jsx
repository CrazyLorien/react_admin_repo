import React, {Component} from 'react';
import Profile from "../profile/profile";
import { connect, dispatch } from 'react-redux';
import  usersAction  from '../action/user';
import AuthService from '../authenticate/auth-service';

class AppContainer extends Component {
    componentDidMount(){
        let authUser = AuthService.getAuthUser();
        if(this.props.users.usersList.length <=0 ){
            this.props.getByName(authUser.name);
        }
    }

    componentWillReceiveProps(props){
        let authUser = AuthService.getAuthUser();
        if(props.users.usersList.length  <= 0 ){
            this.props.getByName(authUser.name);
        }
    }

    render() {
        return (
            <Profile user={this.props.users.usersList[0]} updateUser = {this.props.UpdateUser}  />
        );
    }
}



export default connect((state) => {
    return {
        users : state.users
    }
}, function (dispatch) {
    return {
        getAll: () => {
            dispatch(usersAction.RECEIVE_ALL())
        },
        getByName: (name) => {
            dispatch(usersAction.GET_BY_NAME(name))
        },
        UpdateUser:(user) => {
            dispatch(usersAction.UPDATE_USER(user))       
        }
    }
})(AppContainer)