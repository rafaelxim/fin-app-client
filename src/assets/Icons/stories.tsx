import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Wallet from './Wallet';
import Update from './Update';

export default {
  title: 'Icons',
  component: Wallet,
} as Meta;

export const Default: Story = (args) => <Wallet color="primary600" {...args} />;

export const UpdateIcon: Story = (args) => (
  <Update color="primary600" {...args} />
);
