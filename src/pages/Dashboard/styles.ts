import styled, { css } from 'styled-components';
import media from '../../styles/media';

export const Wrapper = styled.div``;

export const Grid = styled.div`
  ${({ theme }) => css`
    padding: 0 3rem 0 0;
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    /* grid-template-rows: 5rem 15rem 15rem 35rem; */
    grid-gap: 3rem 1.5rem;
    align-items: start;
    background-color: ${theme.colors.background.default};
  `}
`;

export const MenuContainer = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / 6;
  align-self: stretch;

  ${media.lessThan(1200)`
     display: none;
  `}
`;

export const SummaryCardsContainer = styled.div`
  grid-column: 3 / -1;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  ${media.lessThan(1200)`
    grid-column: 2 / -1;
    grid-template-columns: 1fr 1fr 1fr;
  `}

  ${media.lessThan(820)`
     grid-template-columns: 1fr 1fr;      
  `}

  ${media.lessThan(400)`
    grid-template-columns: 1fr;
    justify-items: stretch;
  `}

  > div {
    flex: 1;
    /* max-width: 37rem; */

    ${media.lessThan(400)`
      grid-template-columns: 1fr;
      max-width: unset;
  `}

    >div {
      max-width: unset;
    }
  }
`;

export const GraphicCardContainer = styled.div`
  grid-column: 3 / -1;
  gap: 3rem;
  display: flex;

  ${media.lessThan(1200)`
    grid-column: 2 / -1;
  `}

  ${media.lessThan(820)`
    display: block;
  `}

  > div {
    flex: 1;

    ${media.lessThan(820)`
      margin-bottom: 5rem;
    `}
  }
`;

export const HeaderContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / -1;
  align-self: end;
  padding-left: 2rem;

  ${media.lessThan(1200)`
    grid-column: 2 / -1;
  `}
`;

export const PageTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-weight: bold;
    font-size: 2rem;
    margin-top: 4rem;
  `}
`;

export const PiesContainer = styled.div`
  grid-column: 3 / -1;
  display: flex;
  gap: 0 3rem;

  ${media.lessThan(1200)`
    grid-column: 2 / -1;
  `}

  ${media.lessThan(820)`
    display: block;
  `}

  >div {
    ${media.lessThan(820)`
      margin-bottom: 5rem;
    `}
  }
`;
