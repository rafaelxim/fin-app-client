import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Grid = styled.div`
  ${({ theme }) => css`
    padding: 0 3rem 0 0;
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 5rem 15rem 15rem 35rem;
    grid-gap: 3rem 1.5rem;
    align-items: start;
    background-color: ${theme.colors.background.default};
  `}
`;

export const MenuContainer = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / 6;
  align-self: stretch;
`;

export const SummaryCardsContainer = styled.div`
  grid-column: 3 / -1;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  /* justify-content: space-between; */

  > div {
    flex: 1;
    max-width: 37rem;
  }
`;

export const GraphicCardContainer = styled.div`
  grid-column: 3 / -1;
  gap: 3rem;
  display: flex;
  > div {
    flex: 1;
  }
`;

export const HeaderContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / -1;
  align-self: end;
  padding-left: 2rem;
`;

export const PageTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-weight: bold;
    font-size: 2rem;
  `}
`;

export const PiesContainer = styled.div`
  grid-column: 3 / -1;
  display: flex;
  gap: 0 3rem;
`;
