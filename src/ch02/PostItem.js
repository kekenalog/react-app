import React from 'react'

function PostItem (props) {
  const handleClick = props.handleVote(props.post.id)

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
          <button onClick={handleClick}>点赞</button> &nbsp;
          <span>{post.vote}</span>
        </div>
      }
    </li>
  )
}

export default PostItem
