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
        this.state = {
            message : "",
            canSubmit: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectRole = this.selectRole.bind(this);
        
    }

    //lifecycle hooks
    componentDidMount(){
        if(this.props.user !== undefined){     
            this.setState({
                message : "",
                name : this.props.user.name,
                password : this.props.user.password,
                Roles: this.props.user.Roles,
                canSubmit: true
            });
     }
    }

    componentWillReceiveProps(props){
        if(props.user !== undefined)     
            this.setState({
                message : "",
                name : props.user.name,
                password : props.user.password,
                Roles: props.user.Roles,
                canSubmit: true
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
            id: this.props.user ? this.props.user._id : undefined,
            name: this.state.name,
            password: this.state.password,
            Images: [this.state.avatar],
            Roles: this.state.Roles
        }

        if(user.id)
            this.props.updateUser(user);
        else
            this.props.createUser(user)
    }

    selectRole(role){ 
       if(!role.name)  
            return;
       let Roles  = this.checkRoles(this.state.Roles, role) 
       let user = {
            id: this.props.user ? this.props.user._id : undefined,
            name: this.state.name,
            password: this.state.password,
            Roles: this.state.Roles
        }

        user.Roles = Roles;

        if(user.id)
            this.props.updateUser(user);
        else
            this.props.createUser(user)
    }

    checkRoles(roles, role){
        let newRoles = [];
        let index = -1;
        var count = roles.filter((ur, ind) => { 
            if(ur.name !== role.name){
                return ur;
            }
            else{
                index = ind;
            }
        });

        if(count.length === roles.length)
        {
            roles.push(role)
        }
        else{
            roles.splice(index, 1);
        }

        return newRoles.concat(roles);
    }

    clearAll =  () => {
        this.setState( { canSubmit : true});
    }

    setClientErrors = () => {
        this.setState ({ canSubmit : false}) 
    }

   
    render() {
        let isAdmin = this.state.Roles ? this.state.Roles.filter( (role) => { return role.name.indexOf('Admin') > -1 }).length > 0 : false;
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
                            <input id="Name" type="text" className="validate" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>                     
                        
                    </div>
                    <div className="row">
                        <div className="input-field col s1">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s11">
                            <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div>
                            <Validator data={ [{ "name": this.state.name, "propname": "name", validationRule: ['require']}, 
                            { "name" : this.state.password,  "propname": "password", validationRule: ['require'] } ] } 
                            setClientErrors={ this.setClientErrors} clearAll = { this.clearAll}  canSubmit={ this.state.canSubmit}/> 
                   </div> 

                    {
                        this.state.canSubmit 
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
            (this.state.canSubmit ) ? (
                    <RolesContainer selectRole={ this.selectRole } userRoles={ this.state.Roles } getById = { this.props.getById } />
                ) : (<div></div>)

            }
       
            <ErrorComponent message={this.props.errors} />

            <div>{this.props.children}</div>
        </div>)
    }
}

export default Profile;


