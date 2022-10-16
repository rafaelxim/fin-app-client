import React from 'react';
import { Theme } from '../../../styled-components';
import * as S from './styles';

export type Props = {
  color: keyof Theme['colors'];
};
const Wallet: React.FC<Props> = ({ color }) => {
  return (
    <S.Wrapper color={color}>
      <svg
        width="13"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.036 2.75V.657a.372.372 0 0 0-.638-.262L2.545 3.237a.371.371 0 0 0 0 .533l2.846 2.842a.38.38 0 0 0 .645-.27V4.25c2.8 0 5.016 2.565 4.4 5.467-.353 1.703-1.734 3.075-3.431 3.428a4.515 4.515 0 0 1-5.428-3.758.75.75 0 0 0-1.487.21 6.015 6.015 0 0 0 7.155 5.04c2.343-.457 4.227-2.34 4.685-4.68A6.015 6.015 0 0 0 6.036 2.75Z"
          fill="currentColor"
        />
      </svg>
    </S.Wrapper>
  );
};

export default Wallet;
