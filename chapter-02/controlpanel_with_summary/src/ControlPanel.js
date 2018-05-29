import React, {Component} from 'react';
import Counter from './Counter.js';

const style = {
    margin: '20px'
};

class ControlPanel extends Component {

    constructor(props) {
        super(props);

        this.onCounterUpdate = this.onCounterUpdate.bind(this);

        this.initValues = [0, 10, 20];

        const initSum = this.initValues.reduce((a, b) => a + b, 0); // 规约函数，累加
        this.state = {
            sum: initSum // 初始化30
        };
    }

    // Counter中的onUpdate方法签名相同
    // 子组件传递参数给父组件
    // 子组件点击+ -后，会调用此方法
    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({sum: this.state.sum + valueChange});
    }

    render() {
        return (
            <div style={style}>
                <Counter onUpdate={this.onCounterUpdate} caption="First"/>
                <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]}/>
                <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]}/>
                <hr/>
                <div>Total Count: {this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;

