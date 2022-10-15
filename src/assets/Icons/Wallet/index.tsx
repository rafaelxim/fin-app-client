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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="wallet"
      >
        <path
          d="M27.53 9.255h-20a1 1 0 0 1 0-2h17a1 1 0 0 0 0-2h-17a3.012 3.012 0 0 0-3 3v16a3.013 3.013 0 0 0 3 3h20a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Zm-4.5 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="currentColor"
        />
      </svg>
    </S.Wrapper>
  );
};

export default Wallet;
