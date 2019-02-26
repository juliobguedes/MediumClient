import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

import Form from '../form/Form';
import './App.css';

library.add(faStar, faEmptyStar);

const App = () => (
  <Form />
);

export default App;
