//Links
//https://github.com/testing-library/jest-dom/tree/main/src
//https://jestjs.io/docs/using-matchers
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Matchers from './Matchers';

//custom matcher
function toContainRole (container, role, amount = 1) {
    const elemets = within(container).getAllByRole(role);
 
    if(elemets.length === amount) {
        return {
            pass: true
        }
    }
   
    return {
            pass: false,
            message: () => `Expected to find ${amount} ${role} elements. Fonud ${elemets.length} instead`
    }
}
expect.extend({toContainRole})

//test 1
test('the form displays two buttons', () => {
    //render
    render(<Matchers/>)

    //handlers
    const form = screen.getByLabelText('form');
    const btns = within(form).getAllByRole('button')

    //assertions
    for(let btn of btns) {
        expect(btn).toBeInTheDocument();
    }
    expect(btns).toHaveLength(2);
})

//test 2
test('testing find elements using custom matcher', () => {
    //render
    render(<Matchers/>)

    //handlers
    const form = screen.getByRole('form');

    //assertions
    expect(form).toContainRole('button',2)
})