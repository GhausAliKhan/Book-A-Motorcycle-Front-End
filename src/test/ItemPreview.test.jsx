import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemPreview from '../components/ItemPreview';

test('renders ItemPreview component without crashing when URL is missing', () => {
  const motorcycle = {
    name: 'Vespa Aprilla 125',
    color: 'Blue',
    chassisNumber: 'AA22446688BB',
    bookingPricePerHour: 0.3e3,
    brand: 'Vespa',
    model: 'Eco',
    price: 0.3e4,
    imageLink: 'https://www.vhv.rs/dpng/f/315-3153607_vespa-gts-125-super-hd-png-download.png',
    description: 'Economy Motorcycle',
  };

  render(<ItemPreview url={motorcycle.imageLink} />);
});
