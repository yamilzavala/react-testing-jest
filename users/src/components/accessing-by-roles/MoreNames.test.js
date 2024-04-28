import { render, screen } from "@testing-library/react";
import MoreNames from "./MoreNames";

test('shows and email and serach inputs', () => {
    //render
    render(<MoreNames/>)

    //handlers
    const inputName = screen.getByRole('textbox', {name: /name/i})
    const inputSearch = screen.getByRole('textbox', {name: /search/i})

    //assertion
    expect(inputName).toBeInTheDocument()
    expect(inputSearch).toBeInTheDocument()
})