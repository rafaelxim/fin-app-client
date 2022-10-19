import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  /* min-height: 100vh; */
  padding: 0 3rem;
`;

export const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 5rem 25rem;
  grid-gap: 1.5rem;
  align-items: start;
`;

export const MenuContainer = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / 4;
  align-self: stretch;
`;

export const SummaryCardsContainer = styled.div`
  grid-column: 4 / -1;
  display: flex;
  gap: 3rem;
  margin-top: 5rem;

  > div {
    flex: 1;
  }
`;

export const GraphicCardContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 4 / -1;
  gap: 3rem;
  display: flex;
  > div {
    flex: 1;
  }
`;

export const HeaderContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 4 / -1;
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
