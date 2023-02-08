import React from 'react';
import MUIField, { TextFieldProps } from '@mui/material/TextField';
import styled from 'styled-components';

const TextInput = styled(MUIField)<TextFieldProps>(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.colors.text.primary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.colors.text.primary,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.colors.text.primary,
    },
    '&:hover fieldset': {
      borderColor: theme.colors.text.primary,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors.text.primary,
    },
  },
}));
const TextField = (props: TextFieldProps) => {
  return <TextInput {...props} />;
};
export default TextField;
