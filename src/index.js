import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WeCash from './WeCash';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <WeCash />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
