import React from 'react';
import * as S from './styles';

type CardWrapperProps = {
  children: React.ReactNode;
  topMargin?: boolean;
  fullWidth?: boolean;
  flex?: boolean;
};

const CardWrapper = ({
  children,
  topMargin = false,
  fullWidth = false,
  flex = false,
}: CardWrapperProps) => (
  <S.Wrapper
    fullWidth={fullWidth}
    topMargin={topMargin}
    data-testid="card-wrapper"
    flex={flex}
  >
    {children}
  </S.Wrapper>
);

export default CardWrapper;
