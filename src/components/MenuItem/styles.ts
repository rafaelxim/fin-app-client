import styled, { css, DefaultTheme } from 'styled-components';
import { MenuItemProps } from '.';

const wrapperModifiers = {
  selected: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary200};
    box-shadow: 0 0.4rem 0.4rem 0 #00000040;
  `,
};

export const Wrapper = styled.div<Pick<MenuItemProps, 'selected'>>`
  ${({ theme, selected }) => css`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 0.8rem;
    cursor: pointer;
    font-size: 1.8rem;
    color: ${theme.colors.grey400};
    ${selected! && wrapperModifiers.selected(theme)}

    transition: all .5s ease;

    :hover {
      background-color: ${theme.colors.primary200};
    }
  `}
`;
