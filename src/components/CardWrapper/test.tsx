import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import CardWrapper from '.';

describe('<CardWrapper />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <CardWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          beatae, ullam, iure tempore deleniti, recusandae saepe unde nostrum
          magni aut a quas suscipit iusto quia quidem id. Omnis, sunt. Error.
        </p>
      </CardWrapper>
    );

    expect(screen.getByTestId('card-wrapper')).toBeInTheDocument();
  });
});
