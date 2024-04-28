import { render, screen } from "@testing-library/react";
import AccessibleNames from "./AccessibleNames";

test('accessing elements', () => {
    //render
    render(<AccessibleNames/>)

    //handler
    const submitBtn = screen.getByRole('button', {name: /submit/i})
    const cancelBtn = screen.getByRole('button', {name: /cancel/i})

    //assertion
    expect(submitBtn).toBeInTheDocument()
    expect(cancelBtn).toBeInTheDocument()
})