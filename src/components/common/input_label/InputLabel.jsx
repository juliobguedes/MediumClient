/* @flow */

import React from 'react';
import { Input, Label } from '../index';
import './InputLabel.css';

type InputLabelProps = {
  label: String,
  placeholder: String,
};

const App = ({ label, placeholder }: InputLabelProps) => (
  <div className="form-w">
    <Label labelName={label} />
    <Input placeholder={placeholder} />
  </div>
);

export default App;
