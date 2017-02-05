import React, {Component} from 'react';

class ErrorComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        let message = this.props.message && this.props.message.errors ? this.props.message.errors() : null
        return message ? (
            <div>
                {{message}}
            </div>
        ) : <div>No errors</div>;
    }
}

export default ErrorComponent;