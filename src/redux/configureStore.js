import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducersCombination from './reducers/index';

export default ()=>{
    const store = createStore(
        reducersCombination, {}, 
        composeWithDevTools()
);
    
    return store;
}
