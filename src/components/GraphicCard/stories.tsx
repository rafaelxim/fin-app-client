import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0'
import GraphicCard from '.'

export default {
  title: 'GraphicCard',
  component: GraphicCard
} as Meta

export const Default: Story = () => <GraphicCard />