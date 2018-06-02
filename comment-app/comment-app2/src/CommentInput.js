import React, {Component, PropTypes} from 'react'

class CommentInput extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount() {
        console.log('enter componentWillMount...')
        this._loadUsername()
    }

    componentDidMount() {
        console.log('enter componentDidMount...')
        this.textarea.focus() // 文本框 DOM
    }

    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({username})
        }
    }

    // 缓存当前评论的用户名
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }

    handleUsernameBlur(event) {
        console.log('enter handleUsernameBlur...')
        this._saveUsername(event.target.value)
    }

    handleUsernameChange(event) {
        console.log('enter handleUsernameChange...')
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        console.log('enter handleContentChange...')
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        console.log('enter handleSubmit...')
        if (this.props.onSubmit) { // 父组件回调函数
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({content: ''})
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onBlur={this.handleUsernameBlur.bind(this)}
                            onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
            <textarea
                ref={(textarea) => this.textarea = textarea}
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

CommentInput.propTypes = {
    onSubmit: PropTypes.func // 定义父组件的回调函数
}

export default CommentInput
