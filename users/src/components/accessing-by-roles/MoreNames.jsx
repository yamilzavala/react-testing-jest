import React from 'react';

const MoreNames = () => {
    return (
        <div>
            <label htmlFor="name">name</label>
            <input type="text" id="name" />

            <label htmlFor="search">search</label>
            <input type="text" id="search" />
        </div>
    );
};

export default MoreNames;