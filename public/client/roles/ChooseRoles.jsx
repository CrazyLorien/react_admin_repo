import React, { Component } from 'react';

class ChooseRoles extends Component {
    constructor(props){
        super(props);
        debugger;
        this.handleCheck = this.props.handleCheck.bind(this);

    }

    componentWillMount(){
        if( this.props.roles.length > 0 && this.props.userRoles === undefined){
            //this.props.getById();
        }
    }
   
    render() {
        return (this.props.roles != undefined && this.props.userRoles != undefined) ? (
                    <div className="user-roles-container">
                        <p>List of user's roles</p>
                        <form>
                            {
                                this.props.roles.map((role) => {
                                    let checked = this.props.userRoles.filter( (urole) => urole.name === role.name).length > 0;
                                    //here we should check does role contain in user roles and then check or uncheck it  
                                    return (<div className="row">
                                                <div className = "col s12">
                                                    <input type="checkbox" id={role.name} checked={checked} onChange={this.handleCheck} />
                                                    <label for={role.name} onClick = {this.handleCheck.bind(null, { name : role.name, Permissions: role.Permissions })} >{role.name}</label>
                                                </div>
                                        </div>);
                                })
                            }
                        </form>
                    </div>
                ) : (<div></div>);
    }
}

export default ChooseRoles;