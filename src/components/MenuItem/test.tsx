import React from 'react';
import { screen } from '@testing-library/react';

import MenuItem from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<MenuItem />', () => {
  it('should render the default menu item with no background', () => {
    renderWithTheme(<MenuItem menu="Not Selected" />);

    expect(screen.getByRole('menuitem')).toHaveStyle({
      'background-color': 'unset',
    });
  });

  it('should change the background color when selected', () => {
    renderWithTheme(<MenuItem selected menu="Selected" />);

    expect(screen.getByRole('menuitem')).toHaveStyle({
      'background-color': '#374952',
    });
  });
});
