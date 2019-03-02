// @flow

import React from 'react';

type ClapProps = {
  isClapping: Boolean,
};

const Clap = ({ isClapping }: ClapProps) => {
  if (isClapping) {
    return (<p>hey :D</p>);
  }
  return (<p>oh...</p>);
};

export default Clap;
