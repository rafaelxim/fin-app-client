import React from 'react';
import * as S from './styles';

type CardWrapperProps = {
  children: React.ReactNode;
  topMargin?: boolean;
};

const CardWrapper = ({ children, topMargin = false }: CardWrapperProps) => (
  <S.Wrapper topMargin={topMargin} data-testid="card-wrapper">
    {children}
  </S.Wrapper>
);

export default CardWrapper;
