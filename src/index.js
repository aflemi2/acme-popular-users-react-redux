import React from 'react';
import { render } from 'react-dom';
import store, { loadUsers } from './store.js';

store.dispatch(loadUsers());

const root = document.getElementById('root');

render(<hr />, root);


