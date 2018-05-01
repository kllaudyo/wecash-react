import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import WeCash from './WeCash';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <WeCash />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
