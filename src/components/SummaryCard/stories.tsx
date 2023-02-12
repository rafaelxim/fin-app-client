import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SummaryCard from '.';
import Wallet from '../../assets/Icons/Wallet';

export default {
  title: 'SummaryCard',
  component: SummaryCard,
} as Meta;

export const Default: Story = (args) => (
  <SummaryCard
    title="Patrimônio"
    elapsedTime="do último ano"
    mainValue="$ 50.000,00"
    variation="+5%"
    icon={<Wallet color="primary" />}
    moneyVariation="$5"
    {...args}
  />
);

export const NegativeVariation: Story = (args) => (
  <SummaryCard
    title="Patrimônio"
    elapsedTime="do último ano"
    mainValue="$ 50.000,00"
    variation="-5%"
    negativeVariation
    icon={<Wallet color="primary" />}
    moneyVariation="$5"
    {...args}
  />
);
