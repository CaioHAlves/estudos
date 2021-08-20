import { useEffect, useRef } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { useField } from '@unform/core'

interface Props {
  name: string
  label?: string
  value?: string
  style?: object
  className?: string
  size?: "medium" | "small"
}

export function CheckBox({ name, value, label, style, className, size,  }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
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
    <div>
      <Checkbox
        className={className}
        defaultChecked={defaultChecked}
        inputRef={inputRef}
        value={value}
        id={fieldName}
        style={style}
        size={size}
      />

      <label htmlFor={fieldName} key={fieldName}>
        {label}
      </label>

      {error && <span>{error}</span>}
    </div>
  )
}

export default CheckBox