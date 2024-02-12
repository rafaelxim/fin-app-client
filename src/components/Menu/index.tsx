import React from 'react';
import * as S from './styles';
import MenuItem from '../MenuItem';
import { useNavigate } from 'react-router-dom';
import LogoBrand from '../../assets/brand_logo.png';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper role={'menubar'}>
      <S.LogoWrapper>
        <S.Logo src={LogoBrand} />
      </S.LogoWrapper>
      <S.MenuList>
        <MenuItem click={() => navigate('/')} selected menu="Dashboard" />
        <MenuItem
          click={() => navigate('/registro-de-investimentos')}
          menu="Registrar Investimentos"
        />

        {/* <MenuItem
          click={() => navigate('/insercao-dividendos')}
          menu="Inserção de Dividendos"
        /> */}
      </S.MenuList>
    </S.Wrapper>
  );
};

export default Menu;
