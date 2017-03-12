import React, {Component} from 'react';
import Profile from "..//profile//profile"
import ConnectToStores from "..//decorators//connectToStores"
import UserActions from "..//actions//users"

class AppContainer extends Component {
    //ends with errors here 0 try provide users from props and state it doesn made any result for me.

    componentWillReceiveProps(props){
        if(props.users.length <= 0){
            //here we should set data in store from db;
            UserActions.loadUsers();
        }
    }

    render() {
        return (
            <Profile users={this.props.users} />
        );
    }
}

function getState(stores){
    return {
        users: stores.users.getDataFromStore()
    }
}

export default ConnectToStores(["users"], getState)(AppContainer);