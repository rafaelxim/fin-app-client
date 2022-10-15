import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Wallet from '.';

export default {
  title: 'Icons',
  component: Wallet,
} as Meta;

export const Default: Story = (args) => <Wallet color="green300" {...args} />;
