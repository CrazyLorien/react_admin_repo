import React, {Component} from 'react';
import Profile from "..//profile//profile"
import ConnectToStores from "..//decorators//connectToStores"


class AppContainer extends Component {
    //ends with errors here 0 try provide users from props and state it doesn made any result for me.
    render() {
        return (
            <Profile users={this.props.users} />
        );
    }
}

function getState(stores){
    return {
        users: stores.users.loadUsers()
    }
}

export default ConnectToStores(["users"], getState)(AppContainer);