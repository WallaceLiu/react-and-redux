import React, {Component, PropTypes} from 'react';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {

    constructor(props) {
        console.log('enter constructor: ' + props.caption);
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        // 内部状态
        this.state = {
            count: props.initValue
        }
    }

    /*
    getInitialState() {
      console.log('enter getInitialState');
    }

    getDefaultProps() {
      console.log('enter getDefaultProps');
    }
    */

    // 生命周期
    componentWillReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps ' + this.props.caption)
    }

    // 生命周期
    componentWillMount() {
        console.log('enter componentWillMount ' + this.props.caption);
    }

    // 生命周期
    componentDidMount() {
        console.log('enter componentDidMount ' + this.props.caption);
    }

    onClickIncrementButton() {
        this.setState({count: this.state.count + 1});
    }

    onClickDecrementButton() {
        this.setState({count: this.state.count - 1});
    }

    // 生命周期
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    render() {
        console.log('enter render ' + this.props.caption);
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

// 即便是在上线环境也不是必需的
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
};

Counter.defaultProps = {
    initValue: 0
};

export default Counter;

