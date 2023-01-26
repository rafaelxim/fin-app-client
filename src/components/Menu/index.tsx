import React from 'react';
import * as S from './styles';
import MenuItem from '../MenuItem';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper role={'menubar'}>
      <S.LogoWrapper>My Financial App</S.LogoWrapper>
      <S.MenuList>
        <MenuItem click={() => navigate('/')} selected menu="Dashboard" />
        <MenuItem
          click={() => navigate('/registro-de-investimentos')}
          menu="Registrar Investimentos"
        />
      </S.MenuList>
    </S.Wrapper>
  );
};

export default Menu;
