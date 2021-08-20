import React, {useEffect, useRef} from 'react'
import { useField } from '@unform/core'
import { TextField } from '@material-ui/core'
import { Box } from './styles'

export function Input({
  name,
  label,
  variant,
  type,
  ...rest
}) {

  const inputRef = useRef(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return(
    <Box>
      <TextField
        variant={variant}
        type={type}
        label={label}
        inputRef={inputRef} 
        defaultValue={defaultValue} 
        {...rest}
      />
      {error && <span className="span" >{error}</span>}
    </Box>
  )
}

export default Input