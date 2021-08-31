import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { InputLabel, InputAdornment, IconButton, FormControl, OutlinedInput, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

type PropsInput = {
  name: string,
  label?: string,
  style?: object,
}

interface State {
  password: string;
  showPassword: boolean;
}

export function InputPass({ name, label, ...rest }: PropsInput) {

  const inputRef = useRef<any | null>(null)
  const materialInputRef = useRef<any | null>(null);

  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: any) {
        ref.value = value;
        materialInputRef.current
          .querySelector("label")
          .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");
      }
    })
  }, [fieldName, registerField])

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="Container-InputPassword">
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          inputRef={inputRef}
          ref={materialInputRef}
          error={!!error}
          name={fieldName}
          defaultValue={defaultValue}
          labelWidth={label !== undefined && label?.length > 5 ? 94 : 70}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ?
                  <Visibility className={!!error ? "Icone-Visualizar" : ""}/> :
                  <VisibilityOff className={!!error ? "Icone-Visualizar" : ""}/>
                }
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {error &&
        <div className="Divisao-Erros">
          <ErrorOutlineIcon className="Icone-Input-Error" />
          <Typography className="Error">{error}</Typography>
        </div>
      }
    </div>
  )
}

export default InputPass