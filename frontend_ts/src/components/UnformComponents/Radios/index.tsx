import { useEffect, useRef, InputHTMLAttributes, RefObject } from 'react'
import { useField } from '@unform/core'

interface Props {
  name: string
  label?: string
  options: {
    id: string
    value: string
    label: string
  }[]
}

type RefInputEl = RefObject<HTMLInputElement[] | any>

type InputProps = InputHTMLAttributes<HTMLInputElement | any> & Props

function Radio({ name, label, options, ...rest }: InputProps) {
  const inputRefs: RefInputEl = useRef([])
  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: (refs: RefInputEl) => {
        return refs?.current?.find((input: { checked: boolean }) => input?.checked)?.value
      },
      setValue: (refs: RefInputEl, id: string) => {
        const inputRef = refs?.current?.find((ref: { id: string }) => ref.id === id)
        if (inputRef) inputRef.checked = true
      },
      clearValue: (refs: RefInputEl) => {
        const inputRef = refs?.current?.find((ref: { checked: boolean }) => ref.checked === true)
        if (inputRef) inputRef.checked = false
      },
    })
  }, [fieldName, registerField])

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      {options.map((option, index) => (
        <span key={option.id} style={{display: 'flex', alignItems: 'center'}}>
          <input
            type="radio"
            ref={ref => {
              inputRefs.current[index] = ref
            }}
            id={option.id}
            name={name}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.value}
            {...rest}
          />

          <label htmlFor={option.id} key={option.id}>
            {option.label}
          </label>
        </span>
      ))}

      {error && <span>{error}</span>}
    </div>
  )
}

export default Radio