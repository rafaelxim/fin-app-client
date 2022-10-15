import React from 'react';
import * as S from './styles';
import MenuItem from '../MenuItem';

const Menu = () => (
  <S.Wrapper role={'menubar'}>
    <S.LogoWrapper>My Financial App</S.LogoWrapper>
    <S.MenuList>
      <MenuItem selected menu="Dashboard" />
      <MenuItem menu="Fechamento" />
      <MenuItem menu="Mês Corrente" />
    </S.MenuList>
  </S.Wrapper>
);

export default Menu;
