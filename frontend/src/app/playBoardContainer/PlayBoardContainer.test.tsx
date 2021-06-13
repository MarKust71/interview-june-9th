import React from 'react';
import { render, screen } from '@testing-library/react';

import { PlayBoardContainer } from './PlayBoardContainer';

describe('PlayBoardContainer', () => {
  test('renders', () => {
    render(<PlayBoardContainer />);
    const element = screen.getByText('PlayBoardContainer');
    expect(element).toBeInTheDocument();
  });
});
