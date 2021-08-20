import React, { useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next'
import { AsyncPaginate } from "react-select-async-paginate";
import {
  components,
  OptionTypeBase,
  Props as SelectProps,
} from "react-select";
import { useField } from "@unform/core";
import { Typography } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import './MultipleSelect.scss'

interface Props extends SelectProps<OptionTypeBase, true> {
  name: string;
}

function getLength(options: any) {
  return options.reduce((acc: number, curr: { options: any }) => {
    if (curr.options) return acc + getLength(curr.options)
    return acc + 1
  }, 0)
}

export const MultipleSelect = ({ name, loadOptions, placeholder, loadingMessage, ...rest }: Props) => {

  const selectRef = useRef(null);
  const { t } = useTranslation()

  const { fieldName, defaultValue, registerField } = useField(name);
  const [value, onChange] = React.useState([])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        return ref.state.value.map((option: { value: any; }) => option.value);
      }
    });
  }, [fieldName, registerField]);

  const Menu = (props: any) => {
    const optionsLength = getLength(props.options)

    return (
      <>
        <div>
          <Typography>{optionsLength + t("nova_contagem.resultados")}</Typography>
        </div>
        <components.Menu {...props} >
          {props.children}
        </components.Menu>
      </>
    )
  }

  const IndicatorSeparator = ({ innerProps }: any) => {
    return <span style={{width: "0.1px"}} {...innerProps} />
  }

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <SearchIcon />
      </components.DropdownIndicator>
    )
  }

  return (
    <AsyncPaginate
      isMulti
      selectRef={selectRef}
      closeMenuOnSelect={true}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      loadOptions={loadOptions}
      placeholder={placeholder}
      classNamePrefix="react-select"
      loadingMessage={loadingMessage}
      components={{ Menu, DropdownIndicator, IndicatorSeparator }}
    />
  )
}
export default MultipleSelect
