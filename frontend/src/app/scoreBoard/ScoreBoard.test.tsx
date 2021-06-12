import React from 'react';
import { render, screen } from '@testing-library/react';

import { ScoreBoard } from './ScoreBoard';

describe('ScoreBoard', () => {
  test('renders', () => {
    render(<ScoreBoard />);
    const element = screen.getByText('ScoreBoard');
    expect(element).toBeInTheDocument();
  });
});
