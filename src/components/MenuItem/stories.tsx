import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MenuItem from '.';

import Wallet from '../../assets/Icons/Wallet';

export default {
  title: 'MenuItem',
  component: MenuItem,
} as Meta;

export const Default: Story = (args) => (
  <MenuItem click={() => console.log('w')} menu="Menu Option" {...args}>
    <Wallet color="primary" />
  </MenuItem>
);

export const Selected: Story = (args) => (
  <MenuItem
    click={() => console.log('w')}
    selected
    menu="Menu Option Selected"
    {...args}
  >
    <Wallet color="primary" />
  </MenuItem>
);
