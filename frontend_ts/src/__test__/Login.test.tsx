import React from 'react'
import { LoginWithUnform,  } from '../pages/LoginWithUnform'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe("Login",  () => {
  describe("Valid inputs", () => {
    it('Calls the onSubmit function', async () => {
      const mockOnSubmit = jest.fn()
      const { getByRole, getByTestId} = render(<LoginWithUnform onSubmit={mockOnSubmit}/>)

      await act(async () => {
        fireEvent.change(getByTestId("name"))
        fireEvent.change(getByTestId("password"))
      })

      await act(async () => {
        fireEvent.click(getByRole("button"))
      })
    })
  })
})