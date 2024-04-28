import { render, screen } from "@testing-library/react";
import LoadableColorList from "./LoadableColorList";


//test 1 - get async values
test('favor findBy or findAllBy when data fetching', async() => {
    //render
    render(<LoadableColorList/>)

    //handler - findAllByRole or findBy are async function, and are good for useEffect
    const els = await screen.findAllByRole('listitem')

    //assertion
    expect(els).toHaveLength(3)
})
