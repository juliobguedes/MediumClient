// @flow

import React, { Component } from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  InputLabel, Clap, TextArea, Input, Button,
} from '../common';
import axiosInstance from '../../lib/axiosInstance';

import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        link: '', comment: '', clap: false, rating: 0,
      },
    };

    this.updateRating = this.updateRating.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateRating(newRating: Number) {
    const { fields } = this.state;
    fields.rating = newRating;
    this.setState(fields);
  }

  updateLink(newLink: Object) {
    const { fields } = this.state;
    fields.link = newLink.target.value;
    this.setState(fields);
  }

  updateComment(newComment: Object) {
    const { fields } = this.state;
    fields.comment = newComment.target.value;
    this.setState(fields);
  }

  submitForm() {
    const { fields } = this.state;
    console.log(fields);
    axiosInstance.post('/director', fields).then(response => console.log(response));
  }

  render() {
    const { fields } = this.state;
    const {
      link, comment, clap, rating,
    } = fields;
    return (
      <div className="form-w">
        <h2 style={{ paddingLeft: '15px' }}>Note #1</h2>
        <InputLabel TypeInput={Input} value={link} updateText={this.updateLink} placeholder="Medium Article Link" label="Link" />
        <InputLabel TypeInput={TextArea} value={comment} updateText={this.updateComment} placeholder="Write here your comment" label="Comment" />
        <div className="container">
          <div className="half-left">
            <Clap isClapping={clap} />
          </div>
          <Rating className="half-right" emptySymbol={(<FontAwesomeIcon icon={{ prefix: 'far', iconName: 'star' }} />)} fullSymbol={<FontAwesomeIcon icon="star" />} fractions={2} initialRating={rating} onChange={this.updateRating} />
        </div>
        <Button classCSS="btn-primary pull-right" submit={() => this.submitForm()}>
          Add note
        </Button>
      </div>
    );
  }
}

export default Form;
