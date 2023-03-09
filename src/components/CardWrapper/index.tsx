import React from 'react';
import * as S from './styles';

type CardWrapperProps = {
  children: React.ReactNode;
  topMargin?: boolean;
  fullWidth?: boolean;
};

const CardWrapper = ({
  children,
  topMargin = false,
  fullWidth = false,
}: CardWrapperProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    topMargin={topMargin}
    data-testid="card-wrapper"
  >
    {children}
  </S.Wrapper>
);

export default CardWrapper;
