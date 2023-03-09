import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  ${({ theme }) => css`
    flex: 4;
    color: ${theme.colors.text.primary};
    padding: 5rem 10rem;
    background-color: ${theme.colors.background.paper};
    border-radius: 1rem;
    display: grid;
    grid-gap: 3rem 5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 10rem;
    opacity: 0.8;
  `}
`;

export const FormItem = styled.div`
  min-height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ModalContent = styled.div``;

export const DateContainer = styled.div`
  padding: 2rem 0;
`;
