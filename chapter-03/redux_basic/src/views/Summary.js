import React, {Component} from 'react';

import store from '../Store.js';

class Summary extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        // 内部状态，三个组件内部状态累加的值
        this.state = this.getOwnState();
    }

    onChange() {
        console.log('enter Summary onChange...')
        this.setState(this.getOwnState());
    }

    // 累计sum
    getOwnState() {
        console.log('enter Summary getOwnState...')
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }

        return {sum: sum};
    }

    // 何时更新控件
    // sum是否有变化
    shouldComponentUpdate(nextProps, nextState) {
        console.log('enter Summary shouldComponentUpdate...')
        return nextState.sum !== this.state.sum;
    }

    componentDidMount() {
        console.log('enter Summary componentDidMount...')
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        console.log('enter Summary componentWillUnmount...')
        store.unsubscribe(this.onChange);
    }

    render() {
        console.log('enter Summary render...')
        const sum = this.state.sum;
        return (
            <div>Total Count: {sum}</div>
        );
    }
}

export default Summary;



