import React, {useEffect, useRef, useState} from 'react'
import {TextField} from '@material-ui/core'
import { useField } from '@unform/core'
import { Container } from './styles'

export function DatePicker(props) {
  const { label, name } = props

  const dateRef = useRef(null)

  const {fieldName, registerField, defaultValue, error} = useField(name)
  const [date, setDate] = useState({})

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: dateRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <TextField
        type="date"
        className="textField"
        label={label}
        inputRef={dateRef}
        defaultValue={defaultValue}
        SelectProps={date}
        onChange={(e) => setDate(e.target.value)}
        {...props}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {error && <span className="span" >{error}</span>}
    </Container>
  )
}