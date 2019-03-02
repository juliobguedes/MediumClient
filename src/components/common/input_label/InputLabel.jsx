/* @flow */

import React, { Component } from 'react';
import { Label } from '../index';
import './InputLabel.css';

type InputLabelProps = {
  label: String,
  placeholder: String,
  TypeInput: Component,
  updateText: (text: String) => void,
};

const App = ({
  updateText, label, placeholder, TypeInput,
}: InputLabelProps) => (
  <div>
    <Label labelName={label} />
    <TypeInput updateText={updateText} placeholder={placeholder} />
  </div>
);

export default App;
