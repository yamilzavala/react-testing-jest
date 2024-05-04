import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataForm from './DataForm'

//test 1
test('selecting elements by role', () => {
    //render
    render(<DataForm/>);

    //handlers
    const elements = [
        screen.getByRole('button'),
        screen.getByLabelText('Email'),
        screen.getByPlaceholderText('red'),
        //screen.getByText('Enter data'),
        screen.getByText(/enter data/i),
        //screen.getByDisplayValue('test@gmail.com'),
        //screen.getAllByAltText('data'),
        screen.getByTitle(/click when ready to submit/i),
        screen.getByTestId('image wrapper')
    ]

    //assertions
    for(let item of elements) {
       expect(item).toBeInTheDocument();                   
    }

})

