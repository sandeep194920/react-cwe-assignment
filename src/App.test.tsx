import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { afterEach, expect, it } from 'vitest'

import App from './App'
import { store } from './reduxStore'

afterEach(cleanup)

it('renders with no issues', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(container).toMatchSnapshot()
})

it('opens a dialog when pending contribution is edited', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  fireEvent.click(screen.getByText('July 3rd, 2020'))
  fireEvent.click(screen.getByText('Edit'))

  expect(document.body).toMatchSnapshot()
})
