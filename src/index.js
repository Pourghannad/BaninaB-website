import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import './index.css';
import MainComponent from './main';
import { unregister } from './registerServiceWorker';
ReactDOM.render(<MainComponent />, document.getElementById('root'));
unregister();
