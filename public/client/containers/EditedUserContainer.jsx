import React, {Component} from 'react';
import Profile from "../profile/profile";
import { connect, dispatch } from 'react-redux';
import  usersAction  from '../action/user';
import errorsAction from '../action/error';
import AuthService from '../authenticate/auth-service';
import { Router, Route, Link, withRouter  } from 'react-router';
import LoaderComponent from '../core/loader';

class EditedUserContainer extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
      //here we get user by id from server
      if(!this.props.editedUser){
          this.props.getById(this.props.params.userid);
      } 
    }

    componentWillReceiveProps(props){
        //get user from server after creation or update
        if(!this.props.editedUser){
          this.props.getById(this.props.params.userid);
        } 
    }


    render() {
        if(this.props.editedUser){
            return (
                <Profile  user={this.props.editedUser} 
                            updateClientUser= { this.props.updateClientUser }
                            updateUser = {this.props.UpdateUser}
                            errors={this.props.errors} 
                            canSubmit={ this.props.clienterrors }
                            setClientErrors ={ this.props.setClientErrors} 
                            clearAll={ this.props.clearAll}
                            showLoader={this.props.showLoader} />
            );
        }else{
            return (<LoaderComponent />)
        }
    }
}

export default withRouter(connect((state) => {
    return {
        users: state.users.usersList,
        editedUser : state.users.editedUser,
        showLoader: state.users.showReload,
        errors: state.errors.errorsList,
    }
}, function (dispatch) {
    return {
        getAll: () => {
            dispatch(usersAction.RECEIVE_ALL())
        },
        getById: (id) => {
            dispatch(usersAction.GET_USER_BY_ID(id))
        },
        updateUser: (user) => {
            dispatch(usersAction.UPDATE_USER(user))
        },
        createUser: (user) => {
            dispatch(usersAction.CREATE_USER(user))
        },
        setClientErrors: () => {
            dispatch(errorsAction.SET_CLIENT_VALIDATION_ERRORS())
        },
        updateClientUser: (user) => {
            dispatch(usersAction.UPDATE_CLIENT_USER(user));
        }

    }
})(EditedUserContainer))