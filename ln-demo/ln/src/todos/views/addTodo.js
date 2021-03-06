import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions.js';

import {DatePicker} from 'antd';
import 'antd/dist/antd.css';

class AddTodo extends Component {

    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }

    onSubmit(ev) {
        console.log('enter addTodo onSubmit...')
        ev.preventDefault();

        const input = this.input;
        if (!input.value.trim()) {
            return;
        }

        this.props.onAdd(input.value);
        input.value = '';
    }

    refInput(node) {
        console.log('enter addTodo refInput...')
        this.input = node;
    }

    render() {
        console.log('enter addTodo render...')
        return (

            <div className="add-todo">
                <DatePicker/>
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput}/>
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);

