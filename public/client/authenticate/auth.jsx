import  React  from 'react'

export class AuthenticateComponent extends React.Component {
 constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value});
    console.log(this.state)
  }

  handleSubmit(event){
    console.log(event)
    event.preventDefault();
    //go to profile - on change route we check if user exist  
  }

  render() {
        return <div className="container">
                     <div className="row" >            
                            <form className="col s12"  onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s1">
                                        <label for="name">First Name</label>                                                                   
                                    </div>

                                    <div className="input-field col s11">
                                        <input  id="Name" type="text" className="validate" name="name" onChange={this.handleChange} value={this.state.name}/>                                      
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s1">
                                        <label for="email">Email</label>                                                                      
                                    </div>  
                                    <div className="input-field col s11">                                    
                                        <input id="email" type="text" className="validate" name="email" onChange={this.handleChange} value={this.state.email}/>                                    
                                    </div> 
                                 </div>
                                <div className="row">                           
                                  <div className="col s12">
                                       <button className="btn waves-effect waves-light" type="submit" name="action" >
                                            <i className="material-icons">Sign In</i>
                                        </button>
                                   </div>
                                </div>
                              </form>                         
                        </div>
                    </div>
    }
}