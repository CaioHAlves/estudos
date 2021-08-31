import React, { useRef, useEffect } from 'react'
import ReactSelect, {
  components,
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select'
import { useField } from '@unform/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import './SelectUnique.scss'
import { Typography } from '@material-ui/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

export function Select({ name, options, hasIcon, icon, ...rest }: Props) {

  const selectRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const IndicatorSeparator = ({ innerProps }: any) => {
    return <span style={{width: "0.1px"}} {...innerProps} />
  }

  const DropdownIndicator = (props: any) => {
    return (
      <>
        {hasIcon === true ?
          <components.DropdownIndicator {...props}>
            {icon}
          </components.DropdownIndicator>
          :
          ""
        }
      </>
    )
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return []
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value)
        }
        if (!ref.state.value) {
          return ''
        }
        return ref.state.value.value
      },
    })
  }, [fieldName, registerField, rest.isMulti])

  return (
    <div className="Input-Select-Container">
      <ReactSelect
        ref={selectRef}
        defaultValue={
          defaultValue && options?.find((option) => option.value === defaultValue)
        }
        components={{ DropdownIndicator, IndicatorSeparator }}
        options={options}
        hasIcon={hasIcon}
        icon={icon}
        classNamePrefix="react-select"
        className="Input-Select"
        {...rest}
      />
      {error &&
        <div className="Input-Select-Divisao-Erros">
          <ErrorOutlineIcon className="Icone-Input-Error" />
          <Typography className="Input-Select-Error">{error}</Typography>
        </div>
      }
    </div>
  )
}

export default Select
