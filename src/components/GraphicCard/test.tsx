import React from 'react';
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers';

import GraphicCard from '.'

describe('<GraphicCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GraphicCard />)

    expect(screen.getByRole('heading', { name: /GraphicCard/i })).toBeInTheDocument()
  })
})