import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()


        // 所有评论
        // 会把comments传递给子组件 CommentList
        // 状态提升
        // 当某个状态被多个组件依赖或者影响的时候，
        // 就把该状态提升到这些组件的最近公共父组件中去管理，
        // 用 props 传递数据或者函数来管理这种依赖或着影响的行为。
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')

        this.state.comments.push(comment) // 不妥
        this.setState({
            comments: this.state.comments
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp
