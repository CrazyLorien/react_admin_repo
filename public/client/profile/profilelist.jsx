import React, {Component} from 'react';
import reactable from 'reactable';
import {  withRouter  } from 'react-router';
import ErrorComponent from '../errors/error';
import LoaderComponent from '../core/loader';

var Table = reactable.Table;
var Tr = reactable.Tr;
var Td = reactable.Td;

class ProfileList extends Component {
    constructor(props, context){
        super();

        this.context = context;

        this.sortable = [
                {
                    column: 'name',
                    sortFunction: function(a, b){
                        return a.localeCompare(b);
                    }
                }     
    ]
  }

  handleEditClick = (row) => {
     this.props.router.push(`/adminprofile/edituserprofile/${row._id}`);
  }

  handleCreateClick = (row) => {
      this.props.clearUser();
      this.props.router.push(`/adminprofile/createuser`); 
  }

 render() {
        let self = this;
        return  this.props.showLoader ? <LoaderComponent /> : (
                <div>               
                    <div className="profile-list-container">
                    <p>List of users</p>
                    <Table className="table" id="table" 
                            sortable={this.sortable}
                            defaultSort={ {column: 'name', direction: 'asc' }} >
                            {this.props.users.map(function(row) {
                                    return (
                                        <Tr key={row._id}  >
                                            <Td column="edit"><button onClick = { self.handleEditClick.bind(null, row) }>Edit</button></Td>
                                            <Td column="name">{row.name}</Td>
                                            <Td column="roles">{row.Roles.length > 0 ?
                                                                            row.Roles.reduce( (prev, curr) => { return [...prev,curr.name ? curr.name.replace(' ', '') : '']}, '').join()
                                                                          : ''
                                                                            }</Td>
                                        </Tr>
                                    )
                                })}
                        </Table>
                    </div>
                    <div className="s12 create-usr-btn-container">                                   
                            <button className="btn waves-effect" onClick={this.handleCreateClick}>Create user</button>
                    </div>

                    <ErrorComponent message={this.props.errors} />                                   
                </div>
        )
                    
    }
}

export default withRouter(ProfileList)