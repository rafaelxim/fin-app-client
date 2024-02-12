import styled, { css } from 'styled-components';

type WrapperProps = {
  topMargin: boolean;
  fullWidth: boolean;
  flex: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, topMargin, fullWidth, flex }) => css`
    background: linear-gradient(#1f2226 13%, #1d5872);
    /* border-radius: 2rem; */
    color: ${theme.colors.text.primary};
    margin-top: ${topMargin ? '2rem' : '0'};
    flex: ${fullWidth ? '1' : 'unset'};
    /* box-shadow: 8px 8px 16px 4px #000000; */
    border-radius: 1rem;
    display: ${flex ? 'flex' : 'block'};
  `}
`;
