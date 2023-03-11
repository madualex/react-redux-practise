import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { colorChange } from '../features/theme';


const ColorChange = () => {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <input
                type="text"
                value={color}
                onChange={(e) => { setColor(e.target.value) }}
            />
            <button
                onClick={() =>
                    dispatch(colorChange(color))}
            >
                CHANGE COLOUR
            </button>
        </div>
    )
}

export default ColorChange