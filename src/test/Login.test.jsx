import '@testing-library/jest-dom/';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../store/store';
import Login from '../components/Login';

describe('Login component', () => {
  test('renders Login Component', () => {
    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });
});
