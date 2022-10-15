import React from 'react';
import * as S from './styles';

export type MenuItemProps = {
  children?: React.ReactNode;
  menu: string;
  selected?: boolean;
};

const MenuItem = ({ children, menu, selected = false }: MenuItemProps) => (
  <S.Wrapper role="menuitem" selected={selected}>
    {children}
    <p>{menu}</p>
  </S.Wrapper>
);

export default MenuItem;
