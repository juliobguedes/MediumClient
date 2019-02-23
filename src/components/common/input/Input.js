import React from 'react';
import './Input.css';

const Input = ({ placeholder }) => (
    <div className="input-div">
        <input type="text" id="input" className="input-text" placeholder={placeholder} />
    </div>
);

export default Input;