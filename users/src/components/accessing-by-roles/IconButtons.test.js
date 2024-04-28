import { render, screen } from "@testing-library/react";
import IconButtons from "./IconButtons";

test('find elements base on label', () => {
    //render
    render(<IconButtons/>)

    //hadnlers
    const signInBtn = screen.getByRole('button', {name: /sign in/i})
    const signOutBtn = screen.getByRole('button', {name: /sign out/i})

    //assertions
    expect(signInBtn).toBeInTheDocument()
    expect(signOutBtn).toBeInTheDocument()
})  