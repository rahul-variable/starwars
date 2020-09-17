import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SWApp } from './components/SWApp';
import { configureStore } from './store/store';
import { ErrorComponent } from './components/reusable/ErrorComponent';
import history from './common/history';
import { Router } from 'react-router-dom';
import './assets/css/style.css';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ErrorComponent>
        <SWApp />
      </ErrorComponent>
    </Router>
  </Provider>,
  document.getElementById('root')
);
