import React, {Component} from 'react';

class ClickCounter extends Component {

    // 构造函数
    constructor(props) {
        super(props);

        this.onClickButton = this.onClickButton.bind(this);
        // state 内部状态
        this.state = {
            count: 0
        }
    }

    // 单击事件
    onClickButton() {
        // 只能采用setState赋值
        // setState 方法由父类 Component 所提供
        // 接受对象和函数作为参数
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        const counterStyle = {
            margin: '16px'
        }
        return (
            <div style={counterStyle}>
                <button onClick={this.onClickButton}>Click Me</button>
                <div>
                    Click Count: <span id="clickCount">{this.state.count}</span>
                </div>
            </div>
        );
    }
}

// 注意采用export default，import时，不要用大括号，整体导入
// ClickCounter 是一个组件，导入时，作为整体导入 import ClickCounter from './ClickCounter.js    '
export default ClickCounter;

