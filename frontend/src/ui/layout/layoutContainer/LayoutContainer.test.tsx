import React from 'react';
import { render, screen } from '@testing-library/react';

import { LayoutContainer } from './LayoutContainer';

describe('LayoutContainer', () => {
  test('renders', () => {
    render(<LayoutContainer />);
    const element = screen.getByText('LayoutContainer');
    expect(element).toBeInTheDocument();
  });
});
