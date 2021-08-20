import React, { useRef } from 'react'
//Services
import * as Yup from 'yup'
import apiBase from '../../services/api'
import { log } from '../../services/auth'
import { loginValidations } from '../../services/validations'
import { useTranslation } from "react-i18next";
//Components
import { Form } from "@unform/web";
import { Input } from '../../components'
import { Button } from '@material-ui/core'
import { Box, FormContent, ExternalDiv } from './styles.module'

export function LoginWithUnform(onSubmit:any) {

  const formRef = useRef<any|null>(null)
  const { t } = useTranslation()

  const handleSubmit = async (data: object ) => {
    console.log(data)
    try {
      formRef.current.setErrors({})
      await loginValidations.validate(data, { abortEarly: false })

      const response = await apiBase.post('/session', data)
      const token = response.data.auth_token

      if (token) {
        log(token)
        window.location.href = '/home'
      }


    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const message: any = {}

        error.inner.forEach(err => {
          message[err.path!] = err.message
        })

        formRef.current.setErrors(message)
      } else if (error?.response?.status === 401) {
        formRef.current.setFieldError('password', 'Verifique login e senha')
      }
    }
  }

  return (
    <ExternalDiv>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <FormContent>
          <Box>
            <Input 
              name="name" 
              label={t("login.nome")} 
              variant="outlined" 
              type="text" 
              style={{ width: '350px' }} 
              data-testid="name"
            />
            <Input 
              name="password" 
              label={t("login.senha")}  
              variant="outlined" 
              type="password" 
              style={{ width: '350px' }} 
              data-testid="password"
            />
            <Button
              className="btn"
              type="submit"
              variant="contained"
              color="primary"
            >
              {t("login.entrar")} 
            </Button>
          </Box>
        </FormContent>
      </Form>
    </ExternalDiv>
  )
}

export default LoginWithUnform