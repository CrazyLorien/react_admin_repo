import React, { Component } from 'react';
import ErrorComponent from '../errors/error';
import Validator from '../core/validator';

class ChooseRolesPermissions extends Component {
    state = { role : {} };
    constructor(props){
        super(props);

    }

    handleChange = (event) => {
        let role = {};
        role.name = event.target.value;
        this.setState({ role : role});
    }



    handlePermissionsChange = (permission) => {
        //check is this permission
        var count = this.props.role.Permissions.filter( (pm) => {
            return pm === permission.name;
        });

        var role = this.props.role;
        var index = role.Permissions.indexOf(permission.name);
        if(count.length > 0 ){
           role.Permissions.splice(index, 1); 
        }else{
            role.Permissions.push(permission.name);
        }

        role.name = this.state.role.name;
        if(role._id)
        {
            this.props.updateRole(role);
        }else{
            this.props.createRole(role);
        }
       
    }
   
    render() {
        return (this.props.role !== undefined) ? (
                    <div className="roles-permissions-container">
                        <p>List of role's permissions</p>
                        {
                            this.props.role._id 
                                ?  <p>{this.props.role.name}</p> 
                                : <div>
                                    Enter role name please!
                                    <input type="text" name="rolename" onChange={ this.handleChange }/>
                                        <div>
                                            <Validator data={ [{ "name": this.state.role.name, "propname": "role name", validationRule: ['require']}, 
                                            ] } 
                                            setClientErrors={ this.props.setClientErrors} canSubmit={this.props.canSubmit} clearAll = { this.props.clearAll}/> 
                                        </div> 
                                  </div>
                        }      
                                
                        
                        {
                        !this.props.canSubmit ?
                            <div>
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
                                <ErrorComponent message={this.props.errors} />
                            </div>
                            : <div></div>
                        }
                    </div>
                ) : (<div></div>);
    }
}

export default ChooseRolesPermissions;