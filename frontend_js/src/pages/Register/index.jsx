import React, { useRef } from 'react'
import { Form } from "@unform/web";
import apiBase from '../../services/api'
import { Input } from '../../components'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Scope } from '@unform/core'
import { Box, FormContent, ExternalDiv } from './styles.js'
import { registerValidations } from '../../services/validations'
import * as Yup from 'yup'

export function Register() {

  const formRef = useRef()

  const handleSubmit = async (data, { reset }) => {
    try {
      formRef.current.setErrors({})
      await registerValidations.validate(data, { abortEarly: false })

      const response = await apiBase.post('/user', data)
      if(response?.status === 201) {
        reset()
        window.location.href = '/'
      }

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const message = {}

        error.inner.forEach(err => {
          message[err.path] = err.message
        })

        formRef.current.setErrors(message)
      } else {
        formRef.current.setFieldError('password', 'Ocorreu algum erro')
      }
    }
  }

  return (
    <ExternalDiv>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <FormContent>
          <Box>
          <Scope path="user">
            <Input name="name" label="Name" variant="outlined" type="text" style={{ width: '350px' }} />
            <Input name="email" label="Email" variant="outlined" type="email" style={{ width: '350px' }} />
            <Input name="password" label="Password" variant="outlined" type="password" style={{ width: '350px' }} />
          </Scope>
            <Button
              className="btn"
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Box>
        </FormContent>
      </Form>
      <Link className="link" to="/">Login</Link>
    </ExternalDiv>
  )
}

export default Register