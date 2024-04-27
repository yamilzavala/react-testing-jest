import {render, waitFor, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

//test 1 - validate default values
test('shows 6 products by default', async () => {
    render(<App/>)

    const titles = await screen.findAllByRole('heading')
    expect(titles).toHaveLength(6)
})

//test 2 - validate adding elements
test('clicking on the button load 5 more products', async () => {
    render (<App/>)

    const button = await screen.findByRole('button', {
        name: /load more/i
    })
    user.click(button)

    await waitFor(async () => {
        const titles = await screen.findAllByRole('heading');
        expect(titles).toHaveLength(12)
    })
})