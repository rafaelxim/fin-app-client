import styled, { css } from 'styled-components';

export const CustomTooltip = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grey100};
    color: ${theme.colors.primary400};
    padding: 1rem 2rem;
    border: none;
  `}
`;
