import React, {Component} from 'react';
import ProfileList from "../profile/profilelist";
import { connect, dispatch } from 'react-redux';
import  usersAction  from '../action/users';
import AuthService from '../authenticate/auth-service';

class UsersContainer extends Component {
    componentDidMount(){
        if(this.props.users.usersList.length <= 1){
            this.props.getAll();
        }
    }

    componentWillReceiveProps(props){
        if(props.users.usersList.length <= 1 ){
            this.props.getAll();
        }
    }

    render() {
        return (
            <ProfileList users={this.props.users.usersList}  />
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
        }
    }
})(UsersContainer)