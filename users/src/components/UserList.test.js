import UserList from './UserList'
import user from '@testing-library/user-event'
import {render, waitFor, screen} from '@testing-library/react'

//test 1
test('after submit, a new row is added', async () => {
    //render
    render([<UserList/>])

    //handler
    const trs = screen.getAllByRole('row')
    const button = screen.getByRole('button');

    user.click(button)

    //assertion
    await waitFor(async () => {
        expect(trs).toHaveLength(trs.length + 1);
    })  
})