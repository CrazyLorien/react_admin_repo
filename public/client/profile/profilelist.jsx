import React, {Component} from 'react';
import reactable from 'reactable';
import {  withRouter  } from 'react-router';
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
                        // Sort by last name
                        var nameA = a.split(' ');
                        var nameB = b.split(' ');

                        return nameA[0].localeCompare(nameB[0]);
                    }
                }     
    ]
  }

  handleClick = (row) => {
     this.props.router.push(`/adminprofile/edituserprofile/${row._id}`);
  }

 render() {
        let self = this;
        return  (
                <div>               
                    <div className="profile-list-container">
                    <p>List of users</p>
                    <Table className="table" id="table" 
                            sortable={this.sortable}
                            defaultSort={ {column: 'name', direction: 'asc' }} >
                            {this.props.users.map(function(row) {
                                    return (
                                        <Tr key={row._id} onClick = { self.handleClick.bind(null, row) } >
                                            <Td column="name">{row.name}</Td>
                                            <Td column="roles">{row.Roles.reduce( (prev, curr) => { return [...prev, curr.name.replace(' ', '')]}, '').join()}</Td>
                                            <Td column="images">{ row.Images.join()}</Td>
                                        </Tr>
                                    )
                                })}
                        </Table>
                    </div>
                    </div>
        );
                    
    }
}

export default withRouter(ProfileList)