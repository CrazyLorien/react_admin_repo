import React, { Component} from 'react';
import Validator from '../core/validator';


class PermissionsCreator extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.state = {
            message : ""
        }

    }
    //lifecycle hooks
    componentDidMount(){
        if(this.props.permission !== undefined && this.props.permission.name !== undefined)     
            this.setState({
                id: this.props.permission._id || "",
                name: this.props.permission.name,
                description: this.props.permission.description
            });
    }

    componentWillReceiveProps(props){
        if(props.permission.name !== undefined)     
           this.setState({
                id: props.permission._id || "",
                name: props.permission.name || "",
                description: props.permission.description
            });
    }


    //handlers
    handleChange = (event) =>{
        const name = event.target.name;
        this.setState({ [name]: event.target.value});
    }

    handleSubmit = () => {
        let permission = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description

        }
        if(permission.id)
            this.props.editPermission(permission)
        else{
            this.props.createPermission(permission)
        }
            
    }

    render() {
        let pm = this.props.permission;
        return (this.props.permission !== undefined || this.state.id !== undefined) ? (                 
                    <div className="permissions-container">                   
                        <p>Selected permission</p>
                        <form>
                            <div className="row">
                                    <div className = "col s12" >
                                        <p>Selected permission's name</p>
                                            <input type="text" id={pm.name} value={this.state.name} name="name" onChange={this.handleChange}/>                                                
                                    </div>
                                    <div className = "col s12" >
                                          <p>Selected permission's description</p>
                                           <textarea value={this.state.description} name="description" onChange={this.handleChange}></textarea>                                              
                                    </div>
                            </div>
                            <Validator data={ [{ "name": this.state.name || "", "propname": "permission name", validationRule: ['require']} ] } 
                            setClientErrors={ this.props.setClientErrors} canSubmit={this.props.canSubmit} clearAll = { this.props.clearAll}/> 
                        </form>
                        {
                        !this.props.canSubmit 
                            ?
                                (<div className="s12">                                   
                                    <button className="btn waves-effect" onClick={this.handleSubmit}>Save</button>
                                </div>)
                            : <div></div>
                        }
                    </div>
                ) : (<div></div>);
    }
}

export default PermissionsCreator;