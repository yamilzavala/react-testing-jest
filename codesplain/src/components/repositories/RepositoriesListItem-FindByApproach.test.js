import { render, screen } from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import { MemoryRouter } from 'react-router-dom'; //provides a router context for Link components
//functions that automacally call act() for you: screen.findBy, screen.findAllBy, waitFor, user.keyboard, user.click 

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
    
//    screen.debug()
//    await pause();
//    screen.debug()

   await screen.findByLabelText('js')
})

//function for simulate stop and give time for receive the FileIcon component
// const pause = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, 100)
//     })
// }