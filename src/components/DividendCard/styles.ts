import styled, { css } from 'styled-components';
import fireimg from '../../assets/fire.png';

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: url(${fireimg}),
      linear-gradient(
        ${theme.colors.lighterBlue} -20%,
        ${theme.colors.blue} 30%,
        ${theme.colors.background.paper}
      );
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
  `}
`;

export const Infos = styled.div`
  padding: 2rem 4rem;
  font-size: 1.5rem;
  flex: 1;
`;

export const Title = styled.div`
  > p {
    font-weight: 800;
    margin-bottom: 1rem;
  }
`;

export const Date = styled.div``;

export const Value = styled.div``;

export const Actions = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  > svg {
    cursor: pointer;
  }
`;
