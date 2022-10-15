import styled, { css } from 'styled-components';
import { Props } from './index';

export const Wrapper = styled.div<Props>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color]};

    svg {
      width: 2.8rem;
      height: 2.8rem;
      overflow: visible;
    }
  `}
`;
