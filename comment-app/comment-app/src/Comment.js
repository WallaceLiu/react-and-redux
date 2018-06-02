import React, {Component} from 'react'

// 单个评论
// this.props.comment.username 用户名
// this.props.comment.content 评论内容
class Comment extends Component {
    render() {
        const {username, content} = this.props.comment;
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{username} </span>：
                </div>
                <p>{content}</p>
            </div>
        )
    }
}

export default Comment
