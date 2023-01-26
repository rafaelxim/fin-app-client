import React from 'react';
import * as S from './styles';

export type MenuItemProps = {
  children?: React.ReactNode;
  menu: string;
  selected?: boolean;
  click: () => void;
};

const MenuItem = ({
  children,
  menu,
  selected = false,
  click,
}: MenuItemProps) => (
  <S.Wrapper onClick={() => click()} role="menuitem" selected={selected}>
    {children}
    <p>{menu}</p>
  </S.Wrapper>
);

export default MenuItem;
