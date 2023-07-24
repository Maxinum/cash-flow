import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer'; 

const store = createStore(rootReducer); 

export { store, Provider };
