import React, {Component} from 'react';
import reactable from 'reactable';
import {  withRouter  } from 'react-router';
import ErrorComponent from '../errors/error';
import LoaderComponent from '../core/loader';
var Table = reactable.Table;
var Tr = reactable.Tr;
var Td = reactable.Td;

class Roleslist extends Component {
    constructor(props, context){
        super();

        this.context = context;

        this.sortable = [
                {
                   column: 'role',
                   sortFunction: function(a, b){
                        return a.localeCompare(b);
                    }
                }     
    ]
  }

  handleEditClick = (row) => {
     this.props.router.push(`/adminprofile/editrole/${row._id}`);
  }

  handleClickCreateRole = () => {
     this.props.clearRole();
     this.props.router.push(`/adminprofile/createrole`);
  }

 render() {
        let self = this;
        return  this.props.showLoader ? <LoaderComponent /> :(
                <div>               
                    <div className="profile-list-container">
                        <p>List of roles</p>
                        <Table className="table" id="table" 
                                sortable={this.sortable}
                                defaultSort={ {column: 'name', direction: 'asc' }} >
                                {this.props.roles.map(function(row) {
                                        return (
                                            <Tr key={row._id}   >
                                                <Td column="edit"><button onClick = { self.handleEditClick.bind(null, row) }>Edit</button></Td>
                                                <Td column="role">{row.name}</Td>
                                                <Td column="permissions">{row.Permissions.length > 0 ? 
                                                            row.Permissions.reduce( (prev, curr) => { return [...prev, curr.replace(' ', '')]}, '').join()
                                                             : ''}</Td>
                                            </Tr>
                                        )
                                    })}
                            </Table>
                        </div>
                        <p className="create-role-container"><button onClick={this.handleClickCreateRole}>Create Role</button></p>

                         <ErrorComponent message={this.props.errors} />  
                    </div>
        );
                    
    }
}

export default withRouter(Roleslist)