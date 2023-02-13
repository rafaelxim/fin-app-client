import styled, { css } from 'styled-components';
import city from '../../assets/futuristic-city.jpg';

export const Wrapper = styled.div`
  /* min-height: 100vh; */
  padding: 0 3rem 0 0;
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 5rem 15rem 15rem 35rem;
    grid-gap: 3rem 1.5rem;
    align-items: start;

    background-position: center;
    background-size: cover;
    background-image: linear-gradient(
        0deg,
        rgb(50, 68, 127, 0.8),
        rgb(50, 68, 127, 0.8)
      ),
      url(${city});
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
  justify-content: space-evenly;

  > div {
    flex: 1;
    max-width: 40rem;
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
    font-size: 1.8rem;
  `}
`;
