import React, { ReactNode, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputAdornment, TextField, Typography } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Box } from './styles.module'

type Props = {
  name: string;
  label?: string;
  variant?: "standard" | "filled" | "outlined";
  type?: string;
  style?: object;
  onChange?: (event?: any) => void;
  hasIcon?: boolean;
  icon?: ReactNode;
  className?: string;
  defaultValue?: string | null;
  size?: "small" | "medium"
}

export function Input({ name, label, variant, type, style, onChange, hasIcon, icon, className, defaultValue, size, ...rest }: Props) {

  const inputRef = useRef<HTMLInputElement>(null)
  const materialInputRef = useRef<any | null>(null);

  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value:any) {
        ref.value = value;
        materialInputRef.current
          .querySelector("label")
          .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");
      }
    })
  }, [fieldName, registerField])

  return (
    <Box className="Inputs">
      <TextField
        variant={variant}
        type={type}
        label={label}
        inputRef={inputRef}
        ref={materialInputRef}
        error={!!error}
        defaultValue={defaultValue}
        style={style}
        onChange={onChange}
        size={size}
        InputProps={{
          endAdornment: (
            hasIcon === true &&
            <InputAdornment position="end">
              {icon}
            </InputAdornment>
          ),
        }}
        className={className}
        {...rest}
      />
      {error &&
        <div className="Divisao-Erros">
          <ErrorOutlineIcon className="Icone-Input-Error"/>
          <Typography className="Input-Error">{error}</Typography>
        </div>
      }
    </Box>
  )
}

export default Input;
