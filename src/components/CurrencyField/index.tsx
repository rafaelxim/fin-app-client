import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { NumberFormatValues, NumericFormat } from 'react-number-format';

import TextField from '../TextField';

type MUIPickedProps = Pick<TextFieldProps, 'label' | 'variant' | 'fullWidth'>;

type Props = {
  onValueChange: (v: NumberFormatValues) => void;
} & MUIPickedProps;

const CurrencyField = (props: Props) => (
  <NumericFormat
    {...props}
    prefix={'R$ '}
    value={12323.5888}
    customInput={TextField}
    decimalScale={2}
    decimalSeparator=","
    thousandSeparator="."
    allowLeadingZeros={false}
    onValueChange={(v) => props.onValueChange(v)}
  />
);

export default CurrencyField;
