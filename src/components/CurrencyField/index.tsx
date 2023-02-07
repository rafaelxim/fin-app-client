import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { NumericFormat } from 'react-number-format';

import TextField from '../TextField';

type MUIPickedProps = Pick<TextFieldProps, 'label' | 'variant' | 'fullWidth'>;

const CurrencyField = (props: MUIPickedProps) => (
  <NumericFormat
    {...props}
    prefix={'R$ '}
    value={12323.5888}
    customInput={TextField}
    decimalScale={2}
    decimalSeparator=","
    thousandSeparator="."
    allowLeadingZeros={false}
  />
);

export default CurrencyField;
