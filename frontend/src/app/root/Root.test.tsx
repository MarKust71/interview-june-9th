import React from 'react';
import { render, screen } from '@testing-library/react';

import { Root } from './Root';

describe('Root', () => {
  test('renders', () => {
    render(<Root />);
    const element = screen.getByText('Root');
    expect(element).toBeInTheDocument();
  });
});
