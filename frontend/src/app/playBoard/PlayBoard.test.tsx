import React from 'react';
import { render, screen } from '@testing-library/react';

import { PlayBoard } from './PlayBoard';

describe('PlayBoard', () => {
  test('renders', () => {
    render(<PlayBoard />);
    const element = screen.getByText('PlayBoard');
    expect(element).toBeInTheDocument();
  });
});
