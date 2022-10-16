import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import AreaChart from '.';

describe('<AreaChart />', () => {
  it('should render the heading', () => {
    renderWithTheme(<AreaChart />);

    expect(
      screen.getByRole('heading', { name: /AreaChart/i })
    ).toBeInTheDocument();
  });
});
