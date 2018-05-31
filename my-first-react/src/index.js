import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {view as List} from './list'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <List/>
    </div>
    ,
    document.getElementById('root'));
registerServiceWorker();
