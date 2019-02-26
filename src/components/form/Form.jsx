import React from 'react';
import { InputLabel, Clap, TextArea, Input } from '../common';

import './Form.css';

const Form = () => (
  <div className="form-w">
    <InputLabel
      TypeInput={Input}
      placeholder="Your First Name e.g. Júlio"
      label="Name"
    />
    <Clap />
    <InputLabel
      TypeInput={TextArea}
      placeholder="Write here your comment"
      label="Comment"
    />
  </div>
);

export default Form;
