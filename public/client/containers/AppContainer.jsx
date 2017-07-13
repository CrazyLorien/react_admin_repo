import React, {Component} from 'react';
import Profile from '../profile/profile';
import { connect, dispatch } from 'react-redux';
import  usersAction  from '../action/user';
import AuthService from '../authenticate/auth-service';
import errorsAction from '../action/error';
import LoaderComponent from '../core/loader';

class AppContainer extends Component {
    componentWillMount(){
        let authUser = AuthService.getAuthUser();
        if(this.props.users.length <= 0 ){
            this.props.getAll();
            this.props.getByName(authUser.name);
        }
    }

    componentWillReceiveProps(props){
        let authUser = AuthService.getAuthUser();
        if(props.users && props.users.length  <= 0 ){
            this.props.getAll();
            this.props.getByName(authUser.name);
        }
    }

    render() {
        let authUser = AuthService.getAuthUser();
        if(authUser && !this.props.showLoader){
            let user = this.props.users.filter( (usr) => usr.name === authUser.name)[0] || this.props.editedUser;
            return (
                <Profile user={user} 
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



export default connect((state) => {
    return {
        editedUser: state.users.editedUser,
        users : state.users.usersList,
        errors: state.errors.errorsList,
        clienterrors: state.errors.clientErrorsExistance,
        showLoader: state.users.showReload
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
        },
        setClientErrors: () => {
            dispatch(errorsAction.SET_CLIENT_VALIDATION_ERRORS())
        },
        clearAll: () =>{
            dispatch(errorsAction.CLEAR_ALL())
        },
        updateClientUser: (user) => {
            dispatch(usersAction.UPDATE_CLIENT_USER(user));
        }
    }
})(AppContainer)