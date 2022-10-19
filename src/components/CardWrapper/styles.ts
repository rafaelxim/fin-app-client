import styled, { css } from 'styled-components';

type WrapperProps = {
  topMargin: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, topMargin }) => css`
    background-color: ${theme.colors.primary200};
    border-radius: 2rem;
    color: ${theme.colors.grey100};
    margin-top: ${topMargin ? '2rem' : '0'};
    box-shadow: 8px 8px 16px 4px #000000;
  `}
`;
