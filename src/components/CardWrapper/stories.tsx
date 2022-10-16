import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardWrapper from '.';

export default {
  title: 'CardWrapper',
  component: CardWrapper,
} as Meta;

export const Default: Story = () => (
  <CardWrapper>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit id
      consequuntur ut, laborum aliquid est veritatis velit corporis sint nihil
      quo, reiciendis quaerat minima, error quidem iusto illum voluptatem!
    </p>
  </CardWrapper>
);
