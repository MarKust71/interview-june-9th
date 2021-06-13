import React from 'react';

import { LayoutContainer } from 'ui/layout/layoutContainer/LayoutContainer';
import { PlayBoardContainer } from 'app/playBoardContainer/PlayBoardContainer';

export const Root = (): JSX.Element => {
  return (
    <LayoutContainer>
      <PlayBoardContainer />
    </LayoutContainer>
  );
};
