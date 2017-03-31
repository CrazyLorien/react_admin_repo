import { createStore,applyMiddleware } from 'redux';
import main  from '..\\reducers\\main';
import thunk from 'redux-thunk';

export default  createStore(main,  applyMiddleware(thunk));



