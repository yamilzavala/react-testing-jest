import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

test('can receive a new user and show it on a list', async () => {
  //render
  render(<App/>)

  //handler - selectors and actions
  const nameInput = screen.getByRole('textbox',{name: /name/i})
  const emailInput = screen.getByRole('textbox',{name: /email/i})
  const button = screen.getByRole('button')

  await user.click(nameInput)
  await user.keyboard('yamil')

  await user.click(emailInput)
  await user.keyboard('test@gmail.com')

  await user.click(button)

  const nameContent = screen.getByRole('cell',{name: 'yamil'})
  const emailContent = screen.getByRole('cell',{name: 'test@gmail.com'})

  //screen.debug() //-> debug porpose

  //assertion
  expect(nameContent).toBeInTheDocument();
  expect(emailContent).toBeInTheDocument()
})