import React from 'react';

import { LayoutContainer } from 'ui/layout/layoutContainer/LayoutContainer';
import { PlayBoardContainer } from 'ui/layout/playBoardContainer/PlayBoardContainer';

import { RootProps } from './Root.types';

export const Root: React.FC<RootProps> = ({}) => {
  return (
    <LayoutContainer>
      <PlayBoardContainer />
    </LayoutContainer>
  );
};
