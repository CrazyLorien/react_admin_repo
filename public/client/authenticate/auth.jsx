import  React  from 'react';
import { Router, Route, Link, withRouter  } from 'react-router';
import  AuthService   from './auth-service';
import ErrorComponent from '../errors/error';

class AuthenticateComponent extends React.Component {
 constructor(props) {
    super(props);
    this.state = {value: '',isAuth:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.auth = this.auth || new AuthService(this.props.router);
  }

  componentWillMount(){
      if(AuthService.getAuthUser().name){
            let pathname = this.props.location.pathname;
            this.auth.router.push({
                    pathname: 'adminprofile'
                });
      }
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value});

  }

  handleSubmit(event){
    event.preventDefault();   
    let authRequest = this.auth.login(this.state.name, this.state.email); 
    authRequest.then( (data) => {
           if(data.detail){
                AuthService.setIsAuth(true);
                AuthService.setDetails(this.state.name, this.state.email);
                this.auth.router.push({
                    pathname:'adminprofile'
                });
           }             
       }, (data) => {
            this.setState(data.responseJSON);
       }); 
  }

  render() {
        return <div className="container">
                    <p className="admin-area-title">Barber Admin Area.</p>
                     <div className="row" >            
                            <form className="col s12"  onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s1">
                                        <label for="name">Login</label>                                                                   
                                    </div>

                                    <div className="input-field col s11">
                                        <input  id="Name" type="text" className="validate" name="name" onChange={this.handleChange} value={this.state.name}/>                                      
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s1">
                                        <label for="email">Password</label>                                                                      
                                    </div>  
                                    <div className="input-field col s11">                                    
                                        <input id="email" type="text" className="validate" name="email" onChange={this.handleChange} value={this.state.email}/>                                    
                                    </div> 
                                 </div>
                       
                                  <div className="s12">                                   
                                       <button class="btn waves-effect">Sign In</button>
                                   </div>
                              </form>                         
                        </div>
                        <ErrorComponent message={[ { message : this.state.message }]} />
                    </div>
    }
}

export default withRouter(AuthenticateComponent)