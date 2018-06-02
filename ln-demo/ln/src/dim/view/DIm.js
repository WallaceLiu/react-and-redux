import React, {Component, PropTypes} from 'react';

//import {addTodo} from '../actions.js';

import {Select} from 'antd';
import 'antd/dist/antd.css';

const Option = Select.Option;


class dim extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        data: [],
        value: '',
    }

    handleChange = (value) => {
        console.log('enter handleChange...')
        this.setState({
            value: value,
        });

        if (this.props.onChangeCallback) {
            this.props.onChangeCallback({value: this.state.value});
        }
    }

    render() {
        const {name} = this.props;
        return (
            <div>
                <span>{name}</span><Select defaultValue={this.state.data[0]} style={{width: 90}}
                                           onChange={this.handleChange.bind(this)}>
                {this.state.data.map(d => <Option key={d}>{d}</Option>)}
            </Select>
            </div>
        );
    }
}

dim.propTypes = {
    name: PropTypes.string.isRequired, // 控件名称
    src: PropTypes.string.isRequired, // 数据源
    onGetCallback: PropTypes.fun, // 获得控件内容回调
    onChangeCallback: PropTypes.fun, // 变化事件回调
};


export default dim;

