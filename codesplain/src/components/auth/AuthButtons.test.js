import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';


//helper function
async function renderComponent() {
    render(
        <MemoryRouter>
            <AuthButtons/>
        </MemoryRouter>
    )
    await screen.findAllByRole('link')
}

describe('when the user is not signed in', () => {
    createServer([
        {
            path: '/api/user',
            res: () => {
               return {user: null}
            }
        }
    ])

    //createServer() --> GET '/api/user' --> {user:null}

    test('sign in and sign up are visible', async () => {
        //render
        await renderComponent()     
        
        //handler
        const signInBtn = screen.getByRole('link', {name: /sign in/i});   
        const signUpBtn = screen.getByRole('link', {name: /sign up/i});
        
        //assertions
        expect(signInBtn).toBeInTheDocument();
        expect(signInBtn).toHaveAttribute('href', '/signin')
        expect(signUpBtn).toBeInTheDocument();
        expect(signUpBtn).toHaveAttribute('href', '/signup')
    });

    test('sign out is not visible', async () => {
       //render
        await renderComponent();
        
        //handlers
        const signOutBtn = screen.queryByRole('link', {name: /sign out/i})

        //assertion
        expect(signOutBtn).not.toBeInTheDocument()

    });

   
})

// describe('when the user is signed in', () => {
//     createServer([
//         {
//             path: '/api/user',
//             res: () => {
//                return {
//                 id: 1, 
//                 email: 'test@example.com'
//                }
//             }
//         }
//     ])
//     //createServer() --> GET '/api/user' --> {id: 1, email:test@gmail.com}
//     test('sign in and sign up are not visible', async () => {
//         renderComponent()
//     });
//     test('sign out is visible', async () => {
//         renderComponent()
//     });
// })

const pause = () => new Promise(resolve => {setTimeout(resolve,1000)})