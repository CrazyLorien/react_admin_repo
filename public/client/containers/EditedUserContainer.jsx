import React, {Component} from 'react';
import Profile from "../profile/profile";
import { connect, dispatch } from 'react-redux';
import  usersAction  from '../action/user';
import errorsAction from '../action/error';
import AuthService from '../authenticate/auth-service';
import { Router, Route, Link, withRouter  } from 'react-router';

class EditedUserContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){ 
        // if(this.props.editedUser === undefined && this.props.params.userid)  {              
        //     this.props.getById(this.props.params.userid);   
        // }
        // else if(this.props.editedUser !== undefined && this.props.editedUser._id !== this.props.params.userid)
        // {
        //     this.props.getById(this.props.params.userid);
        // }
        // else if(!this.props.params.userid){
        //     this.props.setClientErrors();
        //     this.props.getById();
        // }
    }

    componentWillReceiveProps(props){ 
        // if(props.editedUser === undefined && this.props.params.userid){            
        //     this.props.getById(this.props.params.userid); 
        // }else if(props.editedUser !== undefined && props.editedUser._id !== this.props.params.userid)
        // {
        //     this.props.getById(this.props.params.userid);
        // }
        // else if(props.editedUser !== undefined && props.editedUser._id !== undefined && !this.props.params.userid){
        //    this.props.router.push(`/adminprofile/edituserprofile/${props.editedUser._id}`); 
        // }        
    }

    render() {
        return (
             <Profile user={this.props.editedUser} updateUser = {this.props.updateUser} createUser={this.props.createUser} 
                      isCurrentUser = { false } showLoader={ this.props.showLoader} errors={ this.props.errors} />
        );
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
        }

    }
})(EditedUserContainer))