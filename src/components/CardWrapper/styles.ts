import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary200};
    border-radius: 2rem;
    color: ${theme.colors.grey100};
  `}
`;
