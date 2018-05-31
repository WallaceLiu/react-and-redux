import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './ControlPanel';
import './index.css';

// index.html index.js 入口，都叫index，这是约定
ReactDOM.render(
    <ControlPanel/>,
    document.getElementById('root')
);
