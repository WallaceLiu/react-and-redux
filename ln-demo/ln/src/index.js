import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {AreaAddr12Selector} from './areaAddr'

ReactDOM.render(
    <div>
        <AreaAddr12Selector lev1="区域" lev2="一级地址" lev3="二级地址"/>
    </div>
    ,
    document.getElementById('root')
);
