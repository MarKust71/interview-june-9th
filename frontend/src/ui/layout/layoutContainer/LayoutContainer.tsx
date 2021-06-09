import React from 'react';

import { LayoutContainerProps } from './LayoutContainer.types';

import './LayoutContainer.css';

export const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return <div className={'layout-container'}>{children}</div>;
};
