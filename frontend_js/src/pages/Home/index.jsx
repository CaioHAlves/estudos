import React from 'react'
// import * as Yup from 'yup'
//Services
// import { todoValidations } from '../../services/validations'
// import { useDispatch, useSelector } from 'react-redux'
// import { getTodosRequest, todosSelector, createTodoRequest, deleteTodoRequest, updateTodoRequest } from '../../store/modules/todos/reducer'
//Packages
// import { Form } from '@unform/web'
//Components
// import { Button, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid, Typography } from '@material-ui/core'
// import { Box, FormContent, ExternalDiv } from './styles.js'
import { Input, CheckBox, PageTitle, Table } from '../../components'
// import FolderIcon from '@material-ui/icons/Folder';
// import DeleteIcon from '@material-ui/icons/Delete';

export function Home() {

  // const { todo } = useSelector(todosSelector)
  // const dispatch = useDispatch()

  // const formRef = useRef()

  // const renderTasks = () => {
  //   dispatch(getTodosRequest())
  // }

  // useEffect(() => {
  //   renderTasks()
  // }, [])

  // const handleSubmit = async (data, { reset }) => {
  //   try {
  //     formRef.current.setErrors({})
  //     const validation = await todoValidations.validate(data, { abortEarly: false })
  //     if (validation) {
  //       dispatch(createTodoRequest(data))
  //       reset()
  //     }

  //   } catch (error) {
  //     if (error instanceof Yup.ValidationError) {
  //       const message = {}

  //       error.inner.forEach(err => {
  //         message[err.path] = err.message
  //       })

  //       formRef.current.setErrors(message)
  //     } else if (error?.response?.status === 401) {
  //       formRef.current.setFieldError('todo.title', 'Ocorreu algum erro')
  //     }
  //   }
  // }

  // const upDateTaskStatus = (_event, task) => {
  //   const changeStatus = task.done === "Not Completed" ? true : false
  //   updateTask({ ...task, done: changeStatus })
  // }

  // const updateTask = async (task) => {
  //   const { title, done } = task
  //   const newTask = { ...task, title: title, done: done }
  //   dispatch(updateTodoRequest(newTask))
  // }

  // const deleteTask = async (_event, task) => {
  //   dispatch(deleteTodoRequest(task))
  // }

  // const colum = [
  //   { title: "ID", field: 'id', editable: 'never' },
  //   { title: "Tasks", field: 'title', initialEditValue: 'initial edit value' },
  //   { title: "Status", field: 'done', editable: 'never' }
  // ]
  // const actions = [
  //   { icon: 'check', tooltip: 'Up Status', onClick: upDateTaskStatus },
  //   { icon: 'delete', tooltip: 'Delete Task', onClick: deleteTask },
  //   { icon: 'refresh', tooltip: 'Reload Task', isFreeAction: true, onClick: renderTasks }
  // ]

  return (
    <div>
      <PageTitle
        title="Home"
        subtitle="Begin"
      />
      {/* <Form onSubmit={handleSubmit} ref={formRef}>
        <FormContent>
          <Box>
            <div className="fields">
              <Input name="todo.title" label="Name" variant="outlined" type="text" size="small" />
              <Button variant="contained" color="primary" className="btn" type="submit">Add Task</Button>
              <CheckBox name="todo.done" value="true" label="Is Active?" className="check" />
            </div>
          </Box>
        </FormContent>
      </Form>
      <Table
        title="Tasks"
        columns={colum}
        data={todo.map((item) => ({
          ...item, done: item.done === false ? "Not Completed" : "Completed"
        }))}
        search={false}
        actions={actions}
        onCellEditApproved={(newValue, oldValue, rowData, columnDef) =>
          new Promise(resolve => {
            const newTitle = { ...rowData, title: newValue }
            updateTask(newTitle);
            resolve()
          })}
        headerStyle={{ background: '#c0c0c0' }}
      // selection={true}
      /> */}
    </div>
  )
}

export default Home