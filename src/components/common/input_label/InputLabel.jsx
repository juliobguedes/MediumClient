/* @flow */

import React, { Component } from 'react';
import { Label } from '../index';
import './InputLabel.css';

type InputLabelProps = {
  label: String,
  placeholder: String,
  TypeInput: Component,
};

const App = ({ label, placeholder, TypeInput }: InputLabelProps) => (
  <div>
    <Label labelName={label} />
    <TypeInput placeholder={placeholder} />
  </div>
);

export default App;
