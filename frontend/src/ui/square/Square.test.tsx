import React from 'react';
import { render, screen } from '@testing-library/react';

import { Square } from './Square';

describe('Square', () => {
  test('renders', () => {
    render(<Square />);
    const element = screen.getByText('Square');
    expect(element).toBeInTheDocument();
  });
});
