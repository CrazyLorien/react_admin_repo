import React, {Component} from 'react';
import Profile from "../profile/profile";
import { connect, dispatch } from 'react-redux';
import  usersAction  from '../action/users';
import AuthService from '../authenticate/auth-service';

class EditedUserContainer extends Component {
    constructor(){
        super();
    }

    componentDidMount(){   
        if(this.props.editedUsers === undefined){                 
            this.props.getById(this.props.params.userid);
        }     
    }

    componentWillReceiveProps(props){
        if(props.editedUser === undefined){
            this.props.getById(this.props.params.userid);
        }

    }

    render() {
        return (
             <Profile user={this.props.editedUser} updateUser = {this.props.updateUser} isCurrentUser = { false }  />
        );
    }
}

export default connect((state) => {
    return {
        editedUser : state.users.editedUser
    }
}, function (dispatch) {
    return {
        getById: (id) => {
            dispatch(usersAction.GET_BY_ID(id))
        },
        updateUser: (user) => {
             dispatch(usersAction.UPDATE_USER(user))
        }
    }
})(EditedUserContainer)