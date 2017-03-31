import React, {Component} from 'react';
import ErrorComponent from '../errors/error';
import usersAction  from '../action_new_wrote_for_redux/users';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            message : ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentWillReceiveProps(props){
        if(props.user.name !== undefined)     
            this.setState({
                message : "",
                avatar: props.user.Images[0] || 'images/default.jpg',
                name : props.user.name,
                password : props.user.password
            });
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value});

    }

    handleSubmit(event) {
        event.preventDefault();
        let user = {
            name: this.state.name,
            password: this.state.password,
            Images: [this.state.avatar]
        }
        usersAction.updateUser(user);
    }
    render() {
        return (<div className="container">
            <div className="row" >
                <form className="col s12"  >
                    <div className="row">
                        <div className="input-field col s1">
                            <label for="name">First Name</label>
                        </div>

                        <div className="input-field col s11">
                            <input id="Name" type="text" className="validate" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s1">
                            <label for="email">Password</label>
                        </div>
                        <div className="input-field col s11">
                            <input id="email" type="text" className="validate" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s1">
                            <label for="email">Image</label>
                        </div>
                        <div className="input-field col s11">
                            <img src={ this.state.avatar} />
                        </div>
                         <div className="input-field col s11">
                            <input type="text" name="avatar" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="s12">
                        <button class="btn waves-effect" onSubmit={this.handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
            <ErrorComponent message={this.state.message} />
        </div>)
    }
}

export default Profile;


