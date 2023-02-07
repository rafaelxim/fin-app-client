import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary700};
    /* border-radius: 1.3rem; */
    padding: 0 3rem;

    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    padding: 4rem 0;
    border-bottom: 0.1rem solid #ffffff1f;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    color: ${theme.colors.grey100};
  `}
`;

export const MenuList = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`;
