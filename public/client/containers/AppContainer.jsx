import React, {Component} from 'react';
import Profile from "..//profile//profile";
import { connect, dispatch } from 'react-redux';
import  usersAction  from '..//action_new_wrote_for_redux//users';
import  userReducer from '..//reducers//main'



class AppContainer extends Component {
    //ends with errors here 0 try provide users from props and state it doesn made any result for me.
    componentDidMount(){
        if(this.props.users.length <= 0 || this.props.users === undefined){
            //here we should set data in store from db;
            this.props.getAll();
        }
    }

    componentWillReceiveProps(props){
        if(props.users.length <= 0 || props.users === undefined){
            //here we should set data in store from db;
            this.props.getAll();
        }
    }

    render() {
        return (
            <Profile users={this.props.users} />
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
})(AppContainer)