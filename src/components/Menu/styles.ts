import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      ${theme.colors.blue},
      ${theme.colors.background.default}
    );
    /* border-radius: 1.3rem; */
    padding: 0 3rem;
    margin: 2rem 0 0 2rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

export const Logo = styled.img`
  width: 15rem;
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    padding: 4rem 0;
    border-bottom: 0.1rem solid #ffffff1f;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    color: ${theme.colors.text.primary};
  `}
`;

export const MenuList = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`;
