import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  /* min-height: 100vh; */
  padding: 0 3rem 0 0;
`;

export const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5rem 15rem 15rem 35rem;
  grid-gap: 3rem 1.5rem;
  align-items: start;
`;

export const MenuContainer = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / 6;
  align-self: stretch;
`;

export const HeaderContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / -1;
  align-self: end;
  padding-left: 2rem;
`;

export const PageTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grey400};
    font-weight: bold;
    font-size: 1.8rem;
  `}
`;

export const PageContent = styled.div`
  grid-column: 3 / -1;
`;
