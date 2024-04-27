import UserList from './UserList'
import {render, screen, within} from '@testing-library/react'

//test 1
test('shows one line per user', async () => {
    //render
    const mockUsers = [
        { name: 'yamil', email: 'test@gmail.com' },
        { name: 'jack', email: 'jack@gmail.com' }
    ]
    render([<UserList users={mockUsers}/>])

    //handler
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    //assertion   
    expect(rows).toHaveLength(2);    
})

//test 2
test('render the name and email for each user', () => {

})