import React, { Component } from 'react'

class PostItem extends Component {
  handleClick = () => {
    this.props.handleVote(this.props.post.id)
  }

  render() {
    const { post } = this.props
    return (
      <li>
        <div>{post.title}</div>
        <div>
          创建人:<span>{post.author}</span>
        </div>
        <div>
          创建时间:<span>{post.date}</span>
        </div>
        {
          <div>
            <button onClick={this.handleClick}>点赞</button> &nbsp;
            <span>{post.vote}</span>
          </div>
        }
      </li>
    )
  }
}

export default PostItem
