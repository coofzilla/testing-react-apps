// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import {screen} from '@testing-library/dom'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

beforeEach(() => {
  document.body.innerHtml = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to
  const div = document.createElement('div')
  // 🐨 append the div to document.body
  document.body.append(div)

  // 🐨 use createRoot to render the <Counter /> to the div
  const root = createRoot(div)
  act(() => root.render(<Counter />))

  // 🐨 get a reference to the increment and decrement buttons:

  const [decrement, increment] = div.querySelectorAll('button')
  // 🐨 get a reference to the message div:
  const message = div.firstChild.querySelector('div')

  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(message.textContent).toBe('Current count: 0')
  // 🐨 click the increment button (💰 act(() => increment.click()))
  act(() => increment.click())
  // 🐨 assert the message.textContent
  expect(message.textContent).toBe('Current count: 1')

  // 🐨 click the decrement button (💰 act(() => decrement.click()))
  act(() => decrement.click())
  // 🐨 assert the message.textContent
  expect(message.textContent).toBe('Current count: 0')
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  div.remove()
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
