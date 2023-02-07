import React from 'react';
import MUIField, { TextFieldProps } from '@mui/material/TextField';
import styled from 'styled-components';

const TextInput = styled(MUIField)<TextFieldProps>(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.colors.grey100,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.colors.grey100,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.colors.grey100,
    },
    '&:hover fieldset': {
      borderColor: theme.colors.grey100,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors.grey100,
    },
  },
}));
const TextField = (props: TextFieldProps) => {
  return <TextInput {...props} />;
};
export default TextField;
