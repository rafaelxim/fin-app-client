import React from 'react';
import Menu from '../Menu';
import * as S from './styles';

type Props = {
  children: React.ReactNode;
  title: string;
};

const PageBase = ({ children, title }: Props) => (
  <S.Wrapper>
    <S.Grid>
      <S.HeaderContainer>
        <S.PageTitle>{title}</S.PageTitle>
      </S.HeaderContainer>
      <S.MenuContainer>
        <Menu />
      </S.MenuContainer>
      <S.PageContent>{children}</S.PageContent>
    </S.Grid>
  </S.Wrapper>
);

export default PageBase;
