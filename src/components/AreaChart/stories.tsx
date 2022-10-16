import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import AreaChart, { data } from '.';

export default {
  title: 'AreaChart',
  component: AreaChart,
} as Meta;

export const Default: Story = () => (
  <div
    style={{
      height: '30rem',
    }}
  >
    <AreaChart data={data} dataKeyX="name" dataKeyY="uv" />
  </div>
);
