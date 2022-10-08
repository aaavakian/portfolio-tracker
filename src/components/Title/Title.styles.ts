import styled from 'styled-components';

import { StyledParagraph } from '~/components/Paragraph';

export const StyledTitle = styled(StyledParagraph).attrs({ forwardedAs: 'h1' })`
  font-size: 26px;
`;
