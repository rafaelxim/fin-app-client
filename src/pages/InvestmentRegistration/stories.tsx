import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InvestmentRegistration from '.';

export default {
  title: 'InvestmentRegistration',
  component: InvestmentRegistration,
} as Meta;

export const Default: Story = () => <InvestmentRegistration />;
