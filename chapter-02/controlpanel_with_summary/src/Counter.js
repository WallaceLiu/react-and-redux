import React, {Component, PropTypes} from 'react';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {

    constructor(props) {
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue
        }
    }

    onClickIncrementButton() {
        this.updateCount(true);
    }

    onClickDecrementButton() {
        this.updateCount(false);
    }

    // 更新内部状态count
    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

        this.setState({count: newValue})
        this.props.onUpdate(newValue, previousValue) // 这里与 ControlPanel.js中的onCounterUpdate方法签名相同
    }

    render() {
        const {caption} = this.props; // 解析赋值
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func // 通知父组件
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //什么都不做的函数，自定义事件，父组件触发
};

export default Counter;

