import React, {Component} from 'react';
import Profile from "../profile/profile";
import { connect, dispatch } from 'react-redux';
import  usersAction  from '../action/user';
import AuthService from '../authenticate/auth-service';

class EditedUserContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){   
        if(this.props.editedUser === undefined){                 
            this.props.getById(this.props.params.userid);
        }     
    }

    componentWillUpdate(){
        if(this.props.editedUser === undefined){                 
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
            dispatch(usersAction.GET_USER_BY_ID(id))
        },
        updateUser: (user) => {
             dispatch(usersAction.UPDATE_USER(user))
        }
    }
})(EditedUserContainer)