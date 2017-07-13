import React, { Component } from 'react';

class ChooseRoles extends Component {
    constructor(props){
        super(props);
        debugger;
    }

    selectRole(role){ 
       if(!role.name)  
            return;
       let Roles  = this.props.user.Roles.length !== 0 
                 ? this.checkRoles(this.props.user.Roles, role)
                 :[role];
                               
       this.props.user.Roles = Roles;

        if(this.props.user._id)
            this.props.updateClientUser(this.props.user);
        // else
        //     this.props.createUser(this.props.user)
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

        if(count.length > 0)
        {
            roles.push(role)
        }
        else{
            roles.splice(index, 1);
        }

        return newRoles.concat(roles);
    }
   
    render() {
        return (this.props.roles != undefined
                && this.props.userRoles != undefined && this.props.user._id
                ) ? (
                    <div className="user-roles-container">
                        <p>List of user's roles</p>
                        <form>
                            {
                                this.props.roles.map((role) => {
                                    let checked = this.props.userRoles.filter( (urole) => urole.name === role.name).length > 0;
                                    //here we should check does role contain in user roles and then check or uncheck it  
                                    return (<div className="row" key={role._id}>
                                                <div className = "col s12">
                                                    <input type="checkbox" id={role.name} checked={checked}  onChange={ this.selectRole.bind(this, { name : role.name, Permissions: role.Permissions }) }/>
                                                    <label htmlFor={role.name}  >{role.name}</label>
                                                </div>
                                        </div>);
                                })
                            }
                        </form>
                    </div>
                ) : (<div className="empty"></div>);
    }
}

export default ChooseRoles;