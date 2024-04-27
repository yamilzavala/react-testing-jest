import {render, screen, waitFor} from '@testing-library/react'
import UserForm from './UserForm'
import user from '@testing-library/user-event'

//test 1
test('show two inputs and one button', () => {
    //render component
    render(<UserForm/>)

    //manipulate componet or find element on it
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')

    //assertion - expected results
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})

//test 2
const mock = jest.fn()
test('its call onUserAdd when  a form is submitted', async () => {
    //render
    render([<UserForm onUserAdd={mock}/>])

    //handler - find the two inputs
    const nameInput = screen.getByRole('textbox', {name: /enter name/i})
    const emailInput = screen.getByRole('textbox', {name: /enter email/i})
    
    //handler - sumulate typing a name
    await user.click(nameInput);
    await user.keyboard('yamil')

    //handler - sumulate typing an email
    await user.click(emailInput);
    await user.keyboard('test@gmail.com')

    //find the button
    const button = screen.getByRole('button');

    //simulate click the button
    user.click(button)

    //assertion - make sure onUserAdd gets called with user/email
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({ name: 'yamil', email: 'test@gmail.com' })
})