import styled, { css } from 'styled-components';
import { Wrapper as CardWrapper } from '../../components/CardWrapper/styles';

export const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  > ${CardWrapper} {
    flex: 0 0 30%;
  }
`;

export const FileLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    input {
      display: none;
    }
  `}
`;
