import React from 'react';

import { WithChildren } from '~/common/types';

import { StyledParagraph } from './Paragraph.styles';

export function Paragraph({ children }: WithChildren) {
  return <StyledParagraph>{children}</StyledParagraph>;
}
