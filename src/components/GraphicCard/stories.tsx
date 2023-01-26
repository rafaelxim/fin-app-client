import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import GraphicCard from '.';
import { data } from '../AreaChart';

export default {
  title: 'GraphicCard',
  component: GraphicCard,
} as Meta;

export const Default: Story = () => (
  <GraphicCard title="Evolução" data={data} dataKeyX="name" dataKeyY="uv" />
);
