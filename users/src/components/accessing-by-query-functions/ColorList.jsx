/*
all these function star with:
    queryBy
    queryAllBy
    findBy
    findAllBy

Lookin for a single element:
    getBy
    queryBy
    findBy    

Lookin for a multiple elements:
    getAllBy
    queryAllBy
    findAllBy    
*/

import React from 'react';

const ColorList = () => {
    return (
        // list role
        <ul>
            {/* listitem role*/}
            <li aria-label='red'>red</li>
            <li aria-label='blue'>blue</li>
            <li aria-label='green'>green</li>
        </ul>
    );
};

export default ColorList;