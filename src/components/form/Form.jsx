import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  InputLabel, Clap, TextArea, Input,
} from '../common';

import './Form.css';

const Form = () => (
  <div className="form-w">
    <InputLabel
      TypeInput={Input}
      placeholder="Medium Article Link"
      label="Link"
    />
    <InputLabel
      TypeInput={TextArea}
      placeholder="Write here your comment"
      label="Comment"
    />
    <div className="container">
      <div className="half-left">
        <Clap />
      </div>
      <Rating
        className="half-right"
        emptySymbol={(
          <FontAwesomeIcon icon={{ prefix: 'far', iconName: 'star' }} />
        )}
        fullSymbol={<FontAwesomeIcon icon="star" />}
        fractions={2}
        onChange={value => console.log(value)}
      />
    </div>
  </div>
);

export default Form;
