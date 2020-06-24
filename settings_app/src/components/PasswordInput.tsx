import React, { useState } from 'react';
import { TextField, TextFieldProps, InputAdornment, IconButton, OutlinedTextFieldProps } from '@material-ui/core';
import { Visibility as VisibileIcon, VisibilityOff as HiddenIcon } from "@material-ui/icons";

export type PasswordInputProps = TextFieldProps & {
  onPasswordChange : (val:string) => void,
 }

export function PasswordInput(props : PasswordInputProps) {
  let { onPasswordChange, ...cProps } = props;

  if(!cProps.hasOwnProperty('variant')) {
    cProps['variant'] = "outlined";
    // Get around ts typing idiocy
    cProps = cProps as OutlinedTextFieldProps;
  } 

  const [ password, setPassword ] = useState('');
  const [ show, setShow] = useState(false);

  function onChange(e : React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    // console.log("val=", val);
    setPassword(val);
    onPasswordChange(val);
  }

  function onShowToggled() {
    const val = !show;
    setShow(val);
  }

  return (
    <TextField
      type={show ? 'text' : 'password' }
      value={password} onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton 
              aria-label="Toggle password visibility"
              onClick={onShowToggled}
            >
              {show ? <HiddenIcon /> : <VisibileIcon /> }
            </IconButton>
          </InputAdornment>
        ),
      }}
      { ...cProps } 
    />
  )
}