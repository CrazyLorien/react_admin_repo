import  React  from 'react'
import { Router, Route, Link, withRouter  } from 'react-router'
import  AuthService   from '.\\auth-service'
import ErrorComponent from '..\\errors\\error'

class AuthenticateComponent extends React.Component {
 constructor(props) {
    super(props);
    this.state = {value: '',isAuth:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.auth = this.auth || {}
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value});

  }

  handleSubmit(event){
    console.log(event)
    event.preventDefault();
    //go to profile - on change route we check if user exist
    this.auth = new AuthService(this.props.router);
    // for now we should stop work on it - that should be write with flux architecture that should update state of our componentDidUpdate(prevProps, prevState) {
    // and re-render it on change state;
       
    this.auth.login(this.state.name, this.state.email, 'protectedprofile');
    
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
                                       <button>Sign In</button>
                                   </div>
                                </div>
                              </form>                         
                        </div>
                        <ErrorComponent message={this.auth} />
                    </div>
    }
}

export default withRouter(AuthenticateComponent)