import React, {Component} from 'react'

class CommentInput extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    // 提交
    // 会向父组件传递数据
    // 父组件 CommentApp 只需要通过 props 给子组件 CommentInput 传入一个回调函数。
    // 当用户点击发布按钮的时候，CommentInput 调用 props 中的回调函数并且将 state 传入该函数即可。
    // this.props.onSubmit 是在 CommentApp 中 onSubmit 设置的
    handleSubmit() {
        // 掉父组件的传递过来的回调函数
        // onSubmit是父组件的函数
        if (this.props.onSubmit) {
            // 把值传给父组件
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
            })
        }

        this.setState({
            content: ''
        })
    }

    render() {

        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
            <textarea
                value={this.state.content}
                onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
