import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import SummaryCard from '.';
import Wallet from '../../assets/Icons/Wallet';

describe('<SummaryCard />', () => {
  it('should render the summary card', () => {
    renderWithTheme(
      <SummaryCard
        title="Patrimônio"
        elapsedTime="do último ano"
        mainValue="$ 50.000,00"
        variation="+5%"
        icon={<Wallet color="primary" />}
        moneyVariation="$5"
      />
    );
    expect(screen.getByTestId('summary-card')).toBeInTheDocument();
  });

  it('should render the summary card with negative red value', () => {
    renderWithTheme(
      <SummaryCard
        title="Patrimônio"
        elapsedTime="do último ano"
        mainValue="$ 50.000,00"
        variation="-5%"
        negativeVariation
        icon={<Wallet color="primary" />}
        moneyVariation="$5"
      />
    );
    expect(screen.getByTestId('variation-value')).toHaveStyle({
      color: '#DD3E3E',
    });
  });
});
