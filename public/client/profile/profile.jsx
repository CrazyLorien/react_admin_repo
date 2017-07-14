import React, {Component} from 'react';
import ErrorComponent from '../errors/error';
import usersAction  from '../action/user';
import { Router, Route, Link, browserHistory } from 'react-router';
import RolesContainer from '../containers/RolesContainer';
import Validator from '../core/validator';
import LoaderComponent from '../core/loader';

class Profile extends Component {
    constructor(){
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);      
    }

    // event handlers
     handleChange(event) {
        const name = event.target.name;
        this.props.user[name] = event.target.value;
        this.props.updateClientUser(this.props.user);
    }

    handleSubmit(event) {
        event.preventDefault();
        let user = {
            id: this.props.user ? this.props.user._id : undefined,
            name: this.props.user.name || '',
            password: this.props.user.password || '',
            Images: [this.props.user.avatar || ''],
            Roles: this.props.user.Roles
        }

        if(user.id)
            this.props.updateUser(user);
        else
            this.props.createUser(user)
    }

   

    clearAll =  () => {
        //this.props.clearAll();
    }

    setClientErrors = () => {
        //this.props.setClientErrors();
    }

   
    render() {
        let isAdmin = this.props.user.Roles ? this.props.user.Roles.filter( (role) => { return role.name.indexOf('Admin') > -1 }).length > 0 : false;
        let isCurrentUser = this.props.isCurrentUser;
        return (this.props.showLoader && this.props.user === undefined) ? <LoaderComponent /> : (<div className="container">
            Admin profile
            <div className="row" >
                <form className="col s12" onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="input-field col s1">
                            <label htmlFor="name">First Name</label>
                        </div>

                        <div className="input-field col s11">
                            <input id="Name" type="text" className="validate" name="name" value={this.props.user.name} onChange={this.handleChange}/>
                        </div>                     
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s1">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s11">
                            <input id="password" type="password" className="validate" name="password" value={this.props.user.password} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div>
                            <Validator data={ [{ name: this.props.user.name, propname: 'name', validationRule: ['require']}, 
                            { name : this.props.user.password,  propname: 'password', validationRule: ['require'] } ] } 
                            setClientErrors={ this.setClientErrors} clearAll = { this.clearAll}  canSubmit={ this.props.canSubmit} /> 
                   </div> 

                    {
                        !this.props.canSubmit 
                            ? 
                                (<div className="s12">
                                    <button className="btn waves-effect" >Save</button>
                                </div>)
                            : (<div className="s12">
                                    <button className="btn waves-effect" disabled >Save</button>
                                </div>)  
                    }
                </form>
            </div>
            {isAdmin? (
                <div className="input-field col s12 admins-resources-container">
                    <p><Link to="/adminprofile/listofusers" activeStyle={{ color: 'red' }}>List of users</Link></p>
                    <p><Link to="/adminprofile/listofroles" activeStyle={{ color: 'red' }}>List of roles</Link></p>
                    <p><Link to="/adminprofile/listofpermissions" activeStyle={{ color: 'red' }}>List of permissions</Link></p>
                </div>
            ) : (
                    <div></div>
                )}

            {            
            (!this.props.canSubmit ) ? (
                    <RolesContainer updateClientUser = { this.props.updateClientUser}
                                    user = {this.props.user }                                
                                    userRoles={ this.props.user.Roles }
                                    getById = { this.props.getById } />
                ) : (<div></div>)

            }
       
            <ErrorComponent message={this.props.errors} />

            <div>{this.props.children}</div>
        </div>)
    }
}

export default Profile;


