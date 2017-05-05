import React, { Component } from 'react';
import ErrorComponent from '../errors/error';
import Validator from '../core/validator';
import LoaderComponent from '../core/loader';

class ChooseRolesPermissions extends Component {
    state = { role : { name: "" }, canSubmit: true };
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

   clearAll =  () => {
        this.setState( { canSubmit : true});
    }

    setClientErrors = () => {
        this.setState ({ canSubmit : false}) 
    }
   
    render() {
        return (this.props.role !== undefined && !this.props.showLoader) ? (
                    <div className="roles-permissions-container">
                        <p>List of role's permissions</p>
                        {
                            this.props.role._id 
                                ?  <p>{this.props.role.name}</p> 
                                : <div>
                                    Enter role name please!
                                    <input type="text" name="rolename" onChange={ this.handleChange }/>
                                        <div>
                                            <Validator data={ [{ "name": this.state.role.name, "propname": "rolename", validationRule: ['require']}, 
                                            ]} setClientErrors={ this.setClientErrors} clearAll = { this.clearAll}  canSubmit={ this.state.canSubmit}
                                            /> 
                                        </div> 
                                  </div>
                        }      
                                                  
                        {
                            this.state.canSubmit ?
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
                ) : (<LoaderComponent />);
    }
}

export default ChooseRolesPermissions;