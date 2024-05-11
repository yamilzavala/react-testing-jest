import { render, screen } from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import { MemoryRouter } from 'react-router-dom'; //provides a router context for Link components

//mock for skip FileIcon component
jest.mock('../tree/FileIcon', () => {
    //Emulate FileIcon component content
    return () => {
        return 'File icon component'
    }
})

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

//test 1
test('display github link for this repository', async () => {
   renderComponent() 
})