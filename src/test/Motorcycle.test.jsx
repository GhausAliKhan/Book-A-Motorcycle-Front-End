import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Motorcycle from '../components/motorcycle';
import store from '../store/store';

describe('Motorcycle component', () => {
  const motorcycleData = {
    name: 'Test Motorcycle',
    model: 'Test Model',
    description: 'Test Description',
    imageLink: 'link-test-image.png',
  };

  test('handles image loading and error events', () => {
    const currentScreen = render(
      <Provider store={store}>
        <BrowserRouter>
          <Motorcycle motorcycle={motorcycleData} />
        </BrowserRouter>
      </Provider>,
    );
    expect(currentScreen).toMatchSnapshot();
  });
});
