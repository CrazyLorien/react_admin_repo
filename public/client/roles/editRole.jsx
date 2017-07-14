import React, { Component } from 'react';
import ErrorComponent from '../errors/error';
import Validator from '../core/validator';
import LoaderComponent from '../core/loader';

class ChooseRolesPermissions extends Component {
    constructor(props){
        super(props);
        debugger;
        this.handlePermissionsChange = this.handlePermissionsChange.bind(this);
    }

    handleChange = (event) => {
        this.props.role.name = event.target.value;
    }

    handlePermissionsChange(permission) {
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
                                            <Validator data={ 
                                                [{ name: this.props.role.name, propname: 'rolename', validationRule: ['require']}]}
                                                 setClientErrors={ this.props.setClientErrors} clearAll = { this.props.clearAll}  canSubmit={ this.props.isErrors}
                                            /> 
                                        </div> 
                                  </div>
                        }      
                                                  
                        {
                            !this.props.isErrors ?
                            <div>
                                <form>
                                    {
                                        this.props.permissions.map((pm) => {
                                            let checked = this.props.role.Permissions.filter( (pmr) =>  pmr === pm.name).length > 0;
                                            //here we should check does role contain in user roles and then check or uncheck it  
                                            return (<div className="row" key={pm._id}>
                                                        <div className = "col s12" onClick= {this.handlePermissionsChange.bind(this, pm)} >
                                                            <input type="checkbox" id={pm.name} checked={checked} onChange={ this.handlePermissionsChange.bind(this, pm) } />
                                                            <label >{pm.name}</label>
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
                ) : (<LoaderComponent />);
    }
}

export default ChooseRolesPermissions;