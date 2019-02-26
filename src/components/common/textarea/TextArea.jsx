/* @flow */

import React from 'react';
import './TextArea.css';

type TextAreaProps = {
  placeholder: String,
};

const TextArea = ({ placeholder }: TextAreaProps) => (
  <textarea
    placeholder={placeholder}
    className="textarea-text"
  />
);

export default TextArea;
