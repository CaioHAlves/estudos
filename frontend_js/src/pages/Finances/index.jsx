import React, { useRef, useEffect, useState } from 'react'
import * as Yup from 'yup'
//Services
import apiBase from '../../services/api'
import { financesValidations } from '../../services/validations'
//Packages
import { Form } from '@unform/web'
//Components
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import { ExternalDiv } from './styles'
import { Input, PageTitle, Table, DatePicker } from '../../components'

export function Finances() {
  const formRef = useRef({})
  const [open, setOpen] = useState(false)
  const [finances, setFinances] = useState([])

  const renderFinances = () => {
    apiBase.get('/finance')
    .then(response => setFinances(response.data))
    .catch(console.log)
  }

  useEffect(() => {
    renderFinances()
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    formRef.current.setErrors({})
  }

  const handleSubmit = async (data) => {
    try {
      formRef.current.setErrors({})
      await financesValidations.validate(data, { abortEarly: false })

      const response = await apiBase.post('/finance', data)

      if (response.status === 201) {
        renderFinances()
        setOpen(false)
      }

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const message = {}

        error.inner.forEach(err => {
          message[err.path] = err.message
        })

        formRef.current.setErrors(message)
      } else if (error?.response?.status === 401) {
        formRef.current.setFieldError('account', 'Ocorreu algum erro')
      }
    }
  }

  const updateAccount = async (data) => {
    const { id } = data
    const response  = await apiBase.put(['/finance', id].join('/'), data)
    if(response.status === 200) {
      renderFinances()
    }
  }

  const deleteAccount = async (_event, data) => {
    const { id } = data
    const response = await apiBase.delete(['/finance', id].join('/'))
    if(response.status === 204) {
      renderFinances()
    }
  }

  const columns = [
    { title: 'Account', field: 'account', initialEditValue: 'initial edit value' },
    { title: 'Value', field: 'value' },
    { title: 'Exp. Date', field: 'expiration_date'}
  ]
  const actions = [
    { icon: 'delete', tooltip: 'Delete Task', onClick: deleteAccount },
    { icon: 'refresh', tooltip: 'Reload Task', isFreeAction: true, onClick: renderFinances }
  ]

  return (
    <ExternalDiv>
      <PageTitle
        title="Finances"
        subtitle="Accounts"
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">New Account</DialogTitle>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <DialogContent>
            <Input name="account" label="Title" type="text" size="small" variant="outlined" />
            <Input name="value" label="Value" type="text" size="small" variant="outlined" />
            <DatePicker name="expiration_date" label="Exp. Date" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="outlined">Cancel</Button>
            <Button type="submit" color="primary" variant="outlined">Save</Button>
          </DialogActions>
        </Form>
      </Dialog>
      <div style={{marginTop: '-20px'}}>
        <Table
          columns={columns}
          data={finances}
          actions={actions}
          search={false}
          onRowUpdate= {(newValue) => new Promise(resolve => {
            updateAccount(newValue)
            resolve()
          })}
        />
        <hr></hr>
        <Button onClick={handleClickOpen} color="primary" variant="contained">New account</Button>
      </div>
    </ExternalDiv>
  )
}

export default Finances