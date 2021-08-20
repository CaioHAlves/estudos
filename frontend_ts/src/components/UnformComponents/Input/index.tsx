import React, {useEffect, useRef} from 'react'
import { useField } from '@unform/core'
import { TextField } from '@material-ui/core'
import { Box } from './styles.module'

type PropsInput = {
  name: string,
  label: string,
  variant: "standard" | "filled" | "outlined" | undefined,
  type: string,
  style?: object,
  id?: string,
}

export function Input({ name, label, variant, type, id, ...rest}: PropsInput) {

  const inputRef = useRef<any | null>(null)
  const materialInputRef = useRef<any | null>(null);

  const { fieldName, registerField, defaultValue, error } = useField(name)
  
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

  return(
    <Box>
      <TextField
        variant={variant}
        type={type}
        label={label}
        ref={materialInputRef}
        inputRef={inputRef} 
        defaultValue={defaultValue} 
        name={fieldName}
        error={!!error}
        helperText={error || null}
        fullWidth
        data-testid={id}
        {...rest}
      />
    </Box>
  )
}

export default Input