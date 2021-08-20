import React, {useEffect, useRef} from 'react'
import { useField } from '@unform/core'
import { Box } from './styles'

export function CheckBox({ 
  name, 
  value, 
  label,
  ...rest 
}) {

  const checkboxRef = useRef()
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: checkboxRef,
      getValue: ref => {
        return ref.current.checked
      },
      clearValue: ref => {
        ref.current.checked = defaultChecked
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
    })
  }, [defaultValue, fieldName, registerField, defaultChecked])

  return (
    <Box>
      <div>
        <input
          defaultChecked={defaultChecked}
          ref={checkboxRef}
          value={value}
          type="checkbox"
          id={fieldName}
          {...rest}
        />
        <label htmlFor={fieldName} key={fieldName}>
          {label}
        </label>
        {error && <span>{error}</span>}
      </div>
    </Box>
  )
}

export default CheckBox