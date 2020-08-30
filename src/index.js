import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>, 
document.querySelector('#root'));
