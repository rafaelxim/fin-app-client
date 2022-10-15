import React from 'react';
import { screen } from '@testing-library/react';

import Menu from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByRole('menubar')).toBeInTheDocument();
  });
});
