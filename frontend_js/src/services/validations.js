import * as Yup from 'yup'

export const loginValidations = Yup.object().shape({
  name: Yup.string().min(4, 'Nome com 4 letras').required('Nome é requirido'),
  password: Yup.string().typeError('Informe uma senha').min(8, '8 caracteres no minimo')
})

export const registerValidations = Yup.object().shape({
  user: Yup.object().shape({
    name: Yup.string().min(4, 'Nome com 4 letras').required('Nome é requirido'),
    email: Yup.string().email().required(),
    password: Yup.string().typeError('Informe uma senha').min(8, '8 caracteres no minimo')
  })
})

export const todoValidations = Yup.object().shape({
  todo: Yup.object().shape({
    title: Yup.string().min(4, 'Nome com 4 letras').required('Nome é requirido'),
    
  })
})

export const financesValidations = Yup.object().shape({
  account: Yup.string().min(3, 'Informe um titulo com 3 letras').required('Titulo é necessario')
})