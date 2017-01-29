import  React  from 'react'
import { render } from 'react-dom'
import { AuthenticateComponent } from '.\\authenticate\\auth'

class BarberComponent extends React.Component {
    render() {
        return (<div>
                    <div className="Title">Here we should start with auth component first!</div>
                    <AuthenticateComponent />
                    </div>);
    }
}


render(<BarberComponent />, document.getElementById('container'))