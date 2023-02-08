import styled, { css } from 'styled-components';

export const CustomTooltip = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.text.primary};
    color: ${theme.colors.text.secondary};
    padding: 1rem 2rem;
    border: none;
  `}
`;
