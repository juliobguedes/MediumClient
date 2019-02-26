/* @flow */

import React from 'react';
import './Label.css';

type LabelProps = {
  labelName: String,
}

const Label = ({ labelName }: LabelProps) => (
  <p className="fix-margins">
    {labelName}
    :
  </p>
);

export default Label;
