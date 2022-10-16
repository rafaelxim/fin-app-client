import styled, { css } from 'styled-components';

export const Content = styled.div`
  padding: 2.5rem 2.5rem 0 2.5rem;
  ${({ theme }) => css`
    color: ${theme.colors.grey100};
  `}
`;
export const Graphic = styled.div`
  height: 20rem;
  border-radius: 1rem;
  background: linear-gradient(112.32deg, #1c2428 4.17%, #767676 177.91%);
  position: relative;
  top: -4rem;
`;
export const CardInfo = styled.div`
  position: relative;
  top: -1rem;
`;
export const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;
export const CardSubtitle = styled.p`
  font-size: 1.4rem;
`;
export const LastUpdate = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.colors.grey400};
  `}
`;
export const UpdateDescription = styled.div`
  font-size: 1.2rem;
`;
