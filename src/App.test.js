import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
