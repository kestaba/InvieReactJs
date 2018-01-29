import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Invie />, document.getElementById('root'));
registerServiceWorker();
