import { render, screen, act } from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import { MemoryRouter } from 'react-router-dom'; //provides a router context for Link components

//helper
function renderComponent() {
    //mock
    const repository = {
        html_url: 'https://github.com/facebook/react',
        full_name: 'some name', 
        language: 'js', 
        description: 'some description', 
        owner: 'some owner', 
        name: 'some name'
    }
    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository}/>
        </MemoryRouter>
    )
}

//helper pause
const pause = () => new Promise(resolve => setTimeout(resolve, 100));

//test 1
test('display github link for this repository', async () => {
   renderComponent()

   await act(async () => {
    await pause();
   })
})
