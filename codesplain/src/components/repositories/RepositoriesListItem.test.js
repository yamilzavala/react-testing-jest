import { render, screen } from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import { MemoryRouter } from 'react-router-dom'; //provides a router context for Link components
//functions that automacally call act() for you: screen.findBy, screen.findAllBy, waitFor, user.keyboard, user.click 

//helper
function renderComponent() {
    //mock
    const repository = {
        html_url: 'https://github.com/facebook/react',
        full_name: 'some_name', 
        language: 'js', 
        description: 'some_description', 
        owner: {
            login: 'facebook'
        }, 
        name: 'some_name'
    }
    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository}/>
        </MemoryRouter>
    )
    return {repository}
}

//test 1
test('display github link for this repository', async () => {
    //render
    const {repository} = renderComponent();
    
    //handler
    await screen.findByLabelText('js')//FileIcon - call to act() function implicitly
    const link = screen.getByRole('link', {name: /github repository/i}) //new link for bug fix

   //assertion
   expect(link).toHaveAttribute('href', repository.html_url);
})

//test 2
test('shows a fileicon with the appropiate icon', async() => {
    //render
    renderComponent();

    //handler
    const icon = await screen.findByLabelText('js')//FileIcon - call to act() function implicitly

    //assertion
    expect(icon).toHaveClass('js-icon')
})

//test 5
test('shows a link to the code editor page', async () => {
     //render
     const {repository} = renderComponent();

     //handler
     await screen.findByLabelText('js')//FileIcon - call to act() function implicitly
     
     const link = await screen.findByRole('link', {
        name: new RegExp(repository.owner.login)
     }) 

    //assertion
    expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`)
})
