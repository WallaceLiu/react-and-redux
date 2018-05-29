import React, {Component, PropTypes} from 'react';

import store from '../Store.js';
import * as Actions from '../Actions.js'; // view 调用 action

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    constructor(props) {
        super(props);

        // 绑定事件
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState(); // 初始化
    }

    // 获得
    getOwnState() {
        console.log('enter Counter getOwnState...', this.props.caption);
        return {
            value: store.getState()[this.props.caption]
        };
    }

    // 增加值
    onIncrement() {
        console.log('enter Counter onIncrement...', this.props.caption)
        store.dispatch(Actions.increment(this.props.caption));
    }

    // 减少值
    onDecrement() {
        console.log('enter Counter onDecrement...', this.props.caption)
        store.dispatch(Actions.decrement(this.props.caption));
    }

    // 变化
    // 让state变化
    onChange() {
        console.log('enter Counter onChange...', this.props.caption)
        this.setState(this.getOwnState());
    }

    // 何时更新控件
    // 只有点击自己的+ -按钮，或是state变化了，才更新自己的控件
    shouldComponentUpdate(nextProps, nextState) {
        console.log('enter Counter shouldComponentUpdate...', this.props.caption)
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

    // 用store监听所有Counter的onChang
    componentDidMount() {
        console.log('enter Counter componentDidMount...', this.props.caption)
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        console.log('enter Counter componentWillUnmount...')
        store.unsubscribe(this.onChange);
    }

    render() {
        console.log('enter Counter render...', this.props.caption)
        const value = this.state.value;
        const {caption} = this.props;

        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

export default Counter;

