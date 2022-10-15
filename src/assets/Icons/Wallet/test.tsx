import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../../utils/tests/helpers';
import Wallet from '.';

describe('<Wallet />', () => {
  it('should render the wallet with a red color', () => {
    // 1. Renderiza o componente (render)
    // 2. seleciona o elemento a ser testado -(screen)(queryes)
    // 3. faz a assertion
    renderWithTheme(<Wallet color="red100" />);

    // o getByLabelText encontra o texto de acordo com o attr aria-label definido no svg
    expect(screen.getByLabelText(/wallet/i).parentElement).toHaveStyle({
      color: '#DD3E3E',
    });
  });
});
