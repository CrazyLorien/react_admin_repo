import React, {Component} from 'react';
import ErrorComponent from '../errors/error';
import usersAction  from '../action/user';
import { Router, Route, Link, browserHistory } from 'react-router';
import RolesContainer from '../containers/RolesContainer';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            message : ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectRole = this.selectRole.bind(this);
        
    }

    //lifecycle hooks
    componentDidMount(){
        if(this.props.user !== undefined && this.props.user.name !== undefined)     
            this.setState({
                message : "",
                avatar: this.props.user.Images[0] || 'images/default.jpg',
                name : this.props.user.name,
                password : this.props.user.password,
                Roles: this.props.user.Roles
            });
    }

    componentWillReceiveProps(props){
        if(props.user.name !== undefined)     
            this.setState({
                message : "",
                avatar: props.user.Images[0] || 'images/default.jpg',
                name : props.user.name,
                password : props.user.password,
                Roles: props.user.Roles
            });
    }

    // event handlers
     handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value});

    }

    handleSubmit(event) {
        event.preventDefault();
        let user = {
            id: this.props.user._id,
            name: this.state.name,
            password: this.state.password,
            Images: [this.state.avatar],
            Roles: this.state.Roles
        }
        this.props.updateUser(user);
    }

    selectRole(role){   
       let Roles  = this.checkRoles(this.state.Roles, role) 
       let user = {
            id: this.props.user._id,
            name: this.state.name,
            password: this.state.password,
            Images: [this.state.avatar],
            Roles: this.state.Roles
        }

        user.Roles = Roles;
        this.props.updateUser(user); 
    }

    checkRoles(roles, role){
        let newRoles = [];
        var count = roles.filter((ur, index) => { 
            if(ur.name !== role.name){
                return ur;
            }
        });

        if(count.length === roles.length)
            roles.push(role)

        return newRoles.concat(roles);
    }

   
    render() {
        let isAdmin = this.state.Roles ? this.state.Roles.filter( (role) => role.Permissions.indexOf('Update') > -1).length > 0 : false;
        let isCurrentUser = this.props.isCurrentUser;
        return (<div className="container">
            Admin
            <div className="row" >
                <form className="col s12" onSubmit={this.handleSubmit} >
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
                        <button class="btn waves-effect" >Save</button>
                    </div>
                </form>
            </div>
            {isAdmin? (
                <div className="input-field col s12">
                    <p><Link to="/adminprofile/listofusers" activeStyle={{ color: 'red' }}>List of users</Link></p>
                    <p><Link to="/adminprofile/listofroles" activeStyle={{ color: 'red' }}>List of roles</Link></p>
                </div>
            ) : (
                    <div></div>
                )}

            {            
            (!isCurrentUser ) ? (
                    <RolesContainer selectRole={ this.selectRole } userRoles={ this.state.Roles } getById = { this.props.getById } />
                ) : (<div></div>)

            }
       
            <ErrorComponent message={this.state.message} />

            <div>{this.props.children}</div>
        </div>)
    }
}

export default Profile;


