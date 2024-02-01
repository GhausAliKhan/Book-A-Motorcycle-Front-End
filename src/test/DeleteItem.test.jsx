import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import DeleteItem from '../components/DeleteItem';
import store from '../store/store';

describe('DeleteItem component', () => {
  test('renders DeleteItem component with the correct motorcycle name', () => {
    const motorcycle = { id: 1, name: 'Test Motorcycle' };

    const { getByText } = render(
      <Provider store={store}>
        <DeleteItem motorcycle={motorcycle} />
      </Provider>,
    );

    expect(getByText('Test Motorcycle')).toBeInTheDocument();
  });
});
