import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

//test 1
test('queryBy, findeBy, getBy finding 0 elements', async () => {
    //render
    render(<ColorList/>)

    //assertions errors - getByRole synchronous - return an error when don´t find an element
        expect(
            () => screen.getByRole('textbox')
        ).toThrow()
    
    //assertions errors - queryByRole synchronous  - return null when don´t find an element
        expect(screen.queryByRole('textbox')).toEqual(null)

    //assertions errors - findByRole asynchronous
        let errorThrown = false;
        try {
            await screen.findByRole('textbox')
        } catch (error) {
            errorThrown = true;
        }
        expect(errorThrown).toEqual(true)
})

//test 2
test('queryBy, findeBy, getBy finding 1 elements', async () => {
    //render
    render(<ColorList/>)

    //assertions 
    expect(
        screen.getByRole('list')
    ).toBeInTheDocument()

    expect(
        screen.queryByRole('list')
    ).toBeInTheDocument()
    
    expect(
        await screen.findByRole('list')
    ).toBeInTheDocument()
})

//test 3
test('queryBy, findeBy, getBy finding > 1 elements', async () => {
    //render
    render(<ColorList/>)

    //assertions errors - getByRole synchronous - return an error when don´t find an element
    expect(
        () => screen.getByRole('listitem')
    ).toThrow()
    
    //assertions errors - queryByRole synchronous  
    expect(
        () => screen.queryByRole('listitem')
    ).toThrow()

    //assertions errors - findByRole asynchronous
    let errorThrown = false;
    try {
        await screen.findByRole('listitem')
    } catch (error) {
        errorThrown = true;
    }
    expect(errorThrown).toEqual(true)
})

//test 4
test('queryAllBy, findeAllBy, getAllBy finding more than 1 elements', async () => {
    //render
    render(<ColorList/>)

    //assertions
    expect(
        screen.getAllByRole('listitem')
    ).toHaveLength(3)
    expect(
        screen.queryAllByRole('listitem')
    ).toHaveLength(3)
    expect(
        await screen.findAllByRole('listitem')
    ).toHaveLength(3)
})

//test 5 - when to use each
test('favor using getBy to prove an element exists', () => {
    //render
    render(<ColorList/>)

    //handler
    const el = screen.getByRole('list')

    //assertion
    expect(el).toBeInTheDocument()
})

//test 5 - when to use each
test('favor using queryBy to prove an element does not exist', () => {
    //render
    render(<ColorList/>)

    //handler
    const el = screen.queryByRole('textbox')

    //assertion
    expect(el).not.toBeInTheDocument()
})