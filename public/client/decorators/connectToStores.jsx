import React, {Component as ReactComponent} from 'react';
import stores from "..//stores//main"

export default (storeNames, getStatesFromStores) => {
 
    storeNames = storeNames || Object.keys(stores)
    return (Component) =>  class ConnectToSore extends ReactComponent{
        constructor(props){
            super(props);
            this.store = getStatesFromStores(stores, this.props)
        }

        componentWillReceiveProps(props){
            this.setState(getStatesFromStores(stores, this.props))
        }

        componentDidMount = () => {
            storeNames
                .map(name => stores[name])
                .forEach(store =>
                    store.addChangeListener(this.handleStoresChanged)
                )
        }

        componentWillUnmount = () => {
            storeNames
                .map(name => stores[name])
                .forEach(store =>
                    store.removeChangeListener(this.handleStoresChanged)
                )
        }

        handleStoresChanged = () => {
            this.setState(getStateFromStores(stores, this.props));
        }

        render() {
            return <Component {...this.props} {...this.state}/>
        }
    }
}
