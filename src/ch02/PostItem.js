import React from 'react'
import PropTypes from 'prop-types'

function PostItem (props) {
  const handleClick = () => props.handleVote(props.post.id)
  const { post } = props
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

PostItem.prototypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  handleVote: PropTypes.func.isRequired
}

export default PostItem
