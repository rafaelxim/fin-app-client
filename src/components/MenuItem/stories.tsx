import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MenuItem from '.';

import Wallet from '../../assets/Icons/Wallet';

export default {
  title: 'MenuItem',
  component: MenuItem,
} as Meta;

export const Default: Story = (args) => (
  <MenuItem menu="Menu Option" {...args}>
    <Wallet color="grey400" />
  </MenuItem>
);

export const Selected: Story = (args) => (
  <MenuItem selected menu="Menu Option Selected" {...args}>
    <Wallet color="grey400" />
  </MenuItem>
);
