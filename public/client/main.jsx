import  React  from 'react'
import { render } from 'react-dom'

class BarberComponent extends React.Component {
    render() {

        return <div>Here we should start with auth component first!</div>;
    }
}


render(<BarberComponent />, document.getElementById('container'))