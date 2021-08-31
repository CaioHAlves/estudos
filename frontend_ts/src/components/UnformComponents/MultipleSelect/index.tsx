import React, { useRef, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {
  components,
  OptionTypeBase,
  Props as SelectProps,
} from "react-select";
import { useField } from "@unform/core";
import SearchIcon from '@material-ui/icons/Search'

interface Props extends SelectProps<OptionTypeBase, true> {
  name: string;
}

export const MultipleSelect = ({ name, loadOptions, placeholder, loadingMessage, ...rest }: Props) => {

  const selectRef = useRef(null);

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
    return (
      <components.Menu {...props} className="Menu-Multiple-Select">
        {props.children}
      </components.Menu>
    )
  }

  const IndicatorSeparator = ({ innerProps }: any) => {
    return <span style={{width: "0.1px"}} {...innerProps} />
  }

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <SearchIcon className="Icone-Busca--Multple-Select" />
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
      className="Input-Multiple-Select"
      loadingMessage={loadingMessage}
      components={{ Menu, DropdownIndicator, IndicatorSeparator }}
    />
  )
}
export default MultipleSelect
