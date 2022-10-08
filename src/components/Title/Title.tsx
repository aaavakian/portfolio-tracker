import React from 'react';

import { WithChildren } from '~/common/types';

import { StyledTitle } from './Title.styles';

export function Title({ children }: WithChildren) {
  return <StyledTitle>{children}</StyledTitle>;
}
