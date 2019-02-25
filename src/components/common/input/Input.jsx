/* @flow */

import React from 'react';
import './Input.css';

type InputProps = {
  placeholder: String,
};

const Input = ({ placeholder }: InputProps) => (
  <div className="input-div">
    <input type="text" id="input" className="input-text" placeholder={placeholder} />
  </div>
);

export default Input;
