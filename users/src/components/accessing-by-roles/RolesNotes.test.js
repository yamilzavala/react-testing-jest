import { render, screen } from '@testing-library/react';
import RoleExample from './RolesNotes';

test('can find elements by role', () => {
    //render
    render(<RoleExample />)

    //handlers
    const roles = [
        'link',         //a
        'button',       //button
        'contentinfo',  //footer
        'heading',      //h1, h2, h3...
        'banner',       //header
        'img',          //img
        'checkbox',     //input type="checkbox"
        'spinbutton',   //input type="number"
        'radio',        //input type="radio"
        'textbox',      //input type="text"
        'listitem',     //li
        'list'          //ul
    ];   

    for (let role of roles) {    
        const el = screen.getByRole(role);    

        //assertions
        expect(el).toBeInTheDocument();  
    }}
);