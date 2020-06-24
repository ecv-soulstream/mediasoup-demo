import React from 'react';
import { TextField, TextFieldProps, OutlinedTextFieldProps } from '@material-ui/core';

export type TextInputProps = TextFieldProps & {
  onInputChange : (val:string) => void
 }

export function TextInput(props : TextInputProps) {
  let { onInputChange, ...cProps } = props;

  if(!cProps.hasOwnProperty('variant')) {
    cProps['variant'] = "outlined";
    // Get around ts typing idiocy
    cProps = cProps as OutlinedTextFieldProps;
  } 

  function onChange(e : React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    // console.log("val=", val);
    onInputChange(val);
  }

  return (
    <TextField 
      onChange={onChange}
      { ...cProps } 
    />
  )
}