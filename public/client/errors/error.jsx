import React, {Component} from 'react';

class ErrorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { message : ""}
    }

    componentWillReceiveProps(props){
        this.setState({ message : props.message}); 
                                                  
    }
    
    render() {
        return this.state.message ? (
            <div>
                {this.state.message}
            </div>
        ) : <div></div>;
    }
}

export default ErrorComponent;