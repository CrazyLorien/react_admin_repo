import React, {Component} from 'react';

let ValidationRuleDictionary = {
    'require' : /^[a-z ,.'-]+$/i
}


class Validator extends Component {
    errors = {};
    constructor(props){
        super(props)

        this.validate(this.props.data);

    }

    validate(data){

        this.errors = data.map( (element) => {
            for(let i=0; i<element.validationRule.length; i++ ){

                 if(!element.name){
                    return `${element.propname} can not be empty!`;
                 }

                 var patt = ValidationRuleDictionary[element.validationRule[i]];
                 var res = patt.test(element.name);               
                 if(!res){
                    return `${element.propname} is ${element.validationRule}!`
                 }

            }
           
        });

        if(this.errors.filter((er) => er !== undefined).length > 0 && this.props.canSubmit){
            this.props.setClientErrors();
        }
        if(this.errors.filter((er) => er === undefined).length === this.errors.length && !this.props.canSubmit){
            this.props.clearAll();
        }
      
    }

    componentWillReceiveProps(props){
        this.validate(props.data);
    }

    render() {
        return (
            <div className="validator container">
            {
                this.errors.map( (msg, i) => {
                    return (<div key={i}>{msg}</div>);
                })
            }
            </div>
            
        );
    }
}

export default Validator;
