import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup'
//Services
import { todoValidations } from '../../services/validations'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosRequest, todosSelector, createTodoRequest, deleteTodoRequest, updateTodoRequest } from '../../store/modules/todos/reducer'
//Packages
import { Form } from '@unform/web'
import { Button, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid, Divider } from '@material-ui/core'
import { FormContent, Container, FormContainer, ListContainer } from './styles.js'
import { CheckBox, Input, PageTitle } from '../../components'
import { Delete, Check } from '@material-ui/icons';
import { formatDate } from '../../helpers/fomatters'

export function Tasks() {

  const { todo } = useSelector(todosSelector)
  const dispatch = useDispatch()

  const formRef = useRef()

  const renderTasks = () => {
    dispatch(getTodosRequest())
  }

  useEffect(() => {
    renderTasks()
  }, [])

  const handleSubmit = async (data, { reset }) => {
    try {
      formRef.current.setErrors({})
      const validation = await todoValidations.validate(data, { abortEarly: false })
      if (validation) {
        dispatch(createTodoRequest(data))
        reset()
      }

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const message = {}

        error.inner.forEach(err => {
          message[err.path] = err.message
        })

        formRef.current.setErrors(message)
      } else if (error?.response?.status === 401) {
        formRef.current.setFieldError('todo.title', 'Ocorreu algum erro')
      }
    }
  }

  const updateTask = (task) => {
    const { title, done } = task
    const newTask = { ...task, title: title, done: done }
    dispatch(updateTodoRequest(newTask))
  }

  const deleteList = (task) => {
    dispatch(deleteTodoRequest(task))
  }

  return (
    <Container>
      <PageTitle
        title="Todo List"
        subtitle="Tasks"
      />
      <div style={{ marginTop: '10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormContainer>
              <Form onSubmit={handleSubmit} ref={formRef}>
                <FormContent>
                  <div>
                    <Input name="todo.title" label="Name" variant="outlined" type="text" size="small" />
                    <Button variant="contained" color="primary" type="submit">Add Task</Button>
                    <CheckBox name="todo.done" value="true" label="Is Active?" className="check" />
                  </div>
                </FormContent>
              </Form>
            </FormContainer>
            <ListContainer >
              <List dense={true}>
                {todo.map((task, index) => (
                  <div key={index}>
                    <ListItem>
                      <ListItemText
                        primary={task.title && task.done !== true ? <h6>{task.title}</h6> : <h6><s>{task.title}</s></h6>}
                        secondary={formatDate(task.created_at)}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="start"
                          aria-label="Update Status"
                          onClick={() => updateTask({ ...task, done: task.done === false ? true : false })}
                        >
                          <Check />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => deleteList({ id: task.id })}
                        >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </ListContainer>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}