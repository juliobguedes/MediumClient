// @flow

import React from 'react';
import './Button.css';

type ButtonProps = {
  children: String,
  classCSS: String,
  submit: () => void,
};

const Button = ({ submit, children, classCSS }: ButtonProps) => (
  <button type="button" onClick={submit} className={`${classCSS} btn`}>
    {children}
  </button>
);

export default Button;
