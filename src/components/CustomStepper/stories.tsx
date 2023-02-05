import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CustomStepper from '.';

export default {
  title: 'CustomStepper',
  component: CustomStepper,
} as Meta;

export const Default: Story = () => (
  <CustomStepper onChangeStep={() => console.log('e')} />
);
