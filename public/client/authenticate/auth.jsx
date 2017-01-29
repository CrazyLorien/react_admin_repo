import  React  from 'react'

export class AuthenticateComponent extends React.Component {
    render() {
        return <div>
                     <div className="row">            
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input  id="first_name" type="text" className="validate" />
                                        <label for="first_name">First Name</label>
                                    </div>
                              
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text" className="validate" />
                                        <label for="last_name">Last Name</label>
                                    </div>                             
                                  <div className="col s12">
                                       <button className="btn waves-effect waves-light" type="submit" name="action">
                                            <i className="material-icons">Sign In</i>
                                        </button>
                                   </div>
                                </div>
                              </form>                         
                        </div>
                    </div>
    }
}