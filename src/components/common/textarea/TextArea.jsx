/* @flow */

import React from 'react';
import './TextArea.css';

type TextAreaProps = {
  placeholder: String,
  value: String,
  updateText: (text: String) => void,
};

const TextArea = ({ updateText, value, placeholder }: TextAreaProps) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={updateText}
    className="textarea-text"
  />
);

export default TextArea;
