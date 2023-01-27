import styled, { css } from 'styled-components';

export const StepperCard = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey100};
    flex: 1;
    padding: 3rem 2rem;
    background-color: ${theme.colors.primary200};
    border-radius: 2rem;
  `}
`;
