import React from 'react';

const DataForm = () => {
    return (
        <form>
            <h3>Enter data</h3>

            <div data-testid="image wrapper">
                <img src="example.jpg" alt="data" />
            </div>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="test@gmail.com" />

            <label htmlFor="color">Color</label>
            <input id='color' type="text" placeholder="red" />

            <button title='click when ready to submit'>submit</button>
        </form>
    );
};

export default DataForm;