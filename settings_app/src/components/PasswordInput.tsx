import React, { useState } from 'react';
import { TextField, TextFieldProps, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility as VisibileIcon, VisibilityOff as HiddenIcon } from "@material-ui/icons";

type PasswordInputProps = TextFieldProps & {
  onPasswordChange : (val:string) => void
 }

export default function PasswordInput(props : PasswordInputProps) {
  const [ password, setPassword ] = useState('');
  const [ show, setShow] = useState(false);

  function onChange(e : React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setPassword(val);
    props.onPasswordChange(val);
  }

  function onShowToggled() {
    const val = !show;
    setShow(val);
  }

  return (
    <TextField { ...props } 
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
    />
  )

}