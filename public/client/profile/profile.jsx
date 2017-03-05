import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
               Protected profile!
               {this.props.users.name}
            </div>
        );
    }
}

export default Profile;