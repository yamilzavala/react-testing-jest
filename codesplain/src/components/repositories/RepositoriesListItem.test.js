import { render, screen } from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import { MemoryRouter } from 'react-router-dom';

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
    return repository;
}

//test 1
test('display github link for this repository', () => {
    const {repository} = renderComponent()
    
    //assertion
    for(let key in repository) {
        const value = repository[key];
        const el = screen.getByText(new RegExp(value))
        expect(el).toBeInTheDocument();
    }
})