/* @flow */

import React from 'react';
import './Input.css';

type InputProps = {
  placeholder: String,
  value: String,
  updateText: (text: String) => void,
};

const Input = ({ updateText, value, placeholder }: InputProps) => (
  <div className="input-div">
    <input
      type="text"
      id="input"
      value={value}
      onChange={updateText}
      className="input-text"
      placeholder={placeholder}
    />
  </div>
);

export default Input;
