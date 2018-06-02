import React, {Component} from 'react'
import Comment from './Comment'

// 评论集合
class CommentList extends Component {
    render() {
        const {comments} = this.props;
        return (
            <div>
                {comments.map((comment, i) =>
                    <Comment key={i} comment={comment}/>
                )}
            </div>
        )
    }
}

CommentList.defaultProps = {
    comments: []
}

export default CommentList
