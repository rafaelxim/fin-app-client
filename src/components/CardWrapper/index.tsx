import React from 'react';
import * as S from './styles';

type CardWrapperProps = {
  children: React.ReactNode;
};

const CardWrapper = ({ children }: CardWrapperProps) => (
  <S.Wrapper data-testid="card-wrapper">{children}</S.Wrapper>
);

export default CardWrapper;
