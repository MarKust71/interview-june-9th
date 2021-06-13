import React from 'react';
import { render, screen } from '@testing-library/react';

import { Square } from './Square';
import { SquareStatus } from './Square.types';

describe('Square', () => {
  test('renders', () => {
    render(<Square status={SquareStatus.TREASURE} revealed={false} marked={false} />);
    const element = screen.getByText('Square');
    expect(element).toBeInTheDocument();
  });
});
