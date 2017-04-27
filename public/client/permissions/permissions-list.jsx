import React, {Component} from 'react';
import reactable from 'reactable';
var Table = reactable.Table;
var Tr = reactable.Tr;
var Td = reactable.Td;

class Permissionslist extends Component {
    constructor(props, context){
        super();

        this.context = context;

        this.sortable = [
                {
                    column: 'permission',
                    sortFunction: function(a, b){                    
                        return a.localeCompare(b);
                    }
                }     
    ]
  }

  handleClick = (row) => {
      if(!row) {
          this.props.setClientErrors();
          this.props.getPermissionById();
        }else{
            this.props.getPermissionById(row._id);
        }

  }



 render() {
        let self = this;
        return  (
                <div>               
                    <div className="permissions-list-container">
                    <p>List of permissions</p>
                    <Table className="table" id="table" 
                            sortable={this.sortable}
                            defaultSort={ {column: 'permission', direction: 'asc' }} >
                            {this.props.permissions.map(function(row) {
                                    return (
                                        <Tr key={row._id}  >
                                            <Td column="Edit"><button onClick = { self.handleClick.bind(null, row) }>Edit</button></Td>
                                            <Td column="description">{row.description}</Td>
                                            <Td column="permission">{row.name}</Td>                                       
                                        </Tr>
                                    )
                                })}
                        </Table>
                    </div>
                        <div className="s12 create-pms-btn-container">                                   
                            <button className="btn waves-effect" onClick={self.handleClick.bind(null, null)}>Create</button>
                        </div>
                    </div>
        );
                    
    }
}

export default Permissionslist;