import UserList from './UserList'
import {render, screen, within} from '@testing-library/react'

//helper
const mockUsersRender = () => {
    const mockUsers = [
        { name: 'yamil', email: 'test@gmail.com' },
        { name: 'jack', email: 'jack@gmail.com' },
    ]
    render(<UserList users={mockUsers}/>)
    return {
        mockUsers
    }
}

//test 1
test('shows one line per user', async () => {
    //render
    mockUsersRender();

    //handler
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    //assertion   
    expect(rows).toHaveLength(2);    
})

//test 2
test('render the name and email for each user', () => {
    // render
    const {mockUsers} = mockUsersRender();

    //handler
    //screen.logTestingPlaygroundURL(); //--> to find the best selector fot test
    for (let user of mockUsers) {
        const name = screen.getByRole('cell', {name: user.name})
        const email = screen.getByRole('cell', {name: user.email})

    // assertion
        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }
})