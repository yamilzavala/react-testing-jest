import React, {useState, useEffect} from 'react';

function fetchColors() {
    return Promise.resolve(['red', 'blue', 'green'])
}

const LoadableColorList = () => {
    const [colors, setColors] = useState([])

    useEffect(() => {
        fetchColors().then(result => setColors(result))
    }, [])

    return (
        <ul>
            {colors.map(color => (
                <li>{color}</li>
            ))}
        </ul>
    );
};

export default LoadableColorList;