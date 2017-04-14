import React, { Component } from 'react';

class ChooseRolesPermissions extends Component {
    state = { role : {} };
    constructor(props){
        super(props);
        //this.handleCheck = this.props.handleCheck.bind(this);

    }

    handlePermissionsChange = (permission) => {
        //check is this permission
        var count = this.props.role.Permissions.filter( (pm) => {
            return pm === permission.name;
        });

        var role = this.props.role;
        var index = role.Permissions.indexOf(permission.name);
        if(count > 0){
           role.Permissions = role.Permissions.splice(index, 1); 
        }else{
            role.Permissions.push(permission.name);
        }


        this.props.updateRole(role);
    }
   
    render() {
        return (this.props.role !== undefined) ? (
                    <div className="roles-permissions-container">
                        <p>List of role's permissions</p>
                        <p>{this.props.role.name}</p>
                        <form>
                            {

                                this.props.permissions.map((pm) => {
                                     let checked = this.props.role.Permissions.filter( (pmr) =>  pmr === pm.name).length > 0;
                                    //here we should check does role contain in user roles and then check or uncheck it  
                                    return (<div className="row">
                                                <div className = "col s12" onClick = { this.handlePermissionsChange.bind(null, pm)}>
                                                    <input type="checkbox" id={pm.name} checked={checked}  />
                                                    <label for={pm.name}  >{pm.name}</label>
                                                </div>
                                        </div>);
                                })
                            }
                        </form>
                    </div>
                ) : (<div></div>);
    }
}

export default ChooseRolesPermissions;