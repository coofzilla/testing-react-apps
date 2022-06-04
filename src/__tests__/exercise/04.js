// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  let submittedData
  const handleSubmit = data => (submittedData = data)
  render(<Login onSubmit={handleSubmit} />)
  const username = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)

  await userEvent.type(username, 'Bob')
  await userEvent.type(password, 'test123')
  await userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(submittedData).toEqual({username: 'Bob', password: 'test123'})

  //`toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
