import { createStore,applyMiddleware } from 'redux';
import main  from '../reducers/main';
import thunk from 'redux-thunk';
import middlewareApi from '../middleware/middlewareApi';

export default  createStore(main,  applyMiddleware(thunk, middlewareApi));



