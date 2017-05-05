import React, {Component} from 'react';

class ErrorComponent extends Component {
    constructor(props) {
        super(props);

    }

    
    render() {
        return this.props.message  ?
            (<div>
                {
            this.props.message.map( (er,i)=> { 
                    return (<div key={i}>
                        {er.message || er.responseJSON ? er.responseJSON.message : ""}
                    </div>)
                    })
                }
            </div>)
         : (<div></div>);
    }
}

export default ErrorComponent;