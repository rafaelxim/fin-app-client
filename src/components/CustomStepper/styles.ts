import styled, { css } from 'styled-components';

export const StepperCard = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    flex: 1;
    padding: 3rem 2rem;
    background-color: ${theme.colors.background.paper};
    border-radius: 1rem;
  `}
`;
