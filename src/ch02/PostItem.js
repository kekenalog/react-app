import React from 'react'
import PropTypes from 'prop-types'
import './PostItem.css'
import like from './images/like-default.png'

class PostItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      post: this.props.post
    }
  }

  handleVote = () => {
    //采用高级写法
    this.props.handleVote(this.props.post.id)
    // this.props.onVote(this.props.post.id)
  }

  handleEditPost = () => {
    const editing = this.state.editing
    if (editing) {
      // this.props.onSave({
      //高级写法
      this.props.handleSave({
        ...this.state.post,
        date: this.getFormatDate()
      })
    }
    this.setState({
      editing: !editing
    })
  }

  handleTitleChange = (event) => {
    event.preventDefault()
    console.log('handleTitleChange', event.target.name, event.target.value)
    const newPost = { ...this.state.post, title: event.target.value }
    this.setState({
      post: newPost
    })
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  getFormatDate() {
    const date = new Date()
    const year = date.getFullYear()
    let month = date.getMonth() + 1 + ''
    month = month.length === 1 ? '0' + month : month
    let day = date.getDate() + ''
    day = day.length === 1 ? '0' + day : day
    let hour = date.getHours() + ''
    hour = hour.length === 1 ? '0' + hour : hour
    let minute = date.getMinutes() + ''
    minute = minute.length === 1 ? '0' + minute : minute
    return `${year}-${month}-${day} ${hour}:${minute}`
  }

  render() {
    const { post } = this.props
    return (
      <li className="item">
        <div className="title">
          {this.state.editing ? (
            <form>
              <textarea
                rows="10"
                cols="30"
                defaultValue={post.title} // 初始化是使用defaultValue,非 value
                onChange={this.handleTitleChange}
              ></textarea>
            </form>
          ) : (
            post.title
          )}
        </div>
        <div>
          创建人:<span>{post.author}</span>
        </div>
        <div>
          创建时间:<span>{post.date}</span>
        </div>
        <div className="like">
          <span>
            <img alt="vote" src={like} onClick={this.handleVote} />
          </span>
          <span>{post.vote}</span>
        </div>
        <div>
          <button onClick={this.handleEditPost}>
            {this.state.editing ? '保存' : '编辑'}
          </button>
        </div>
      </li>
    )
  }
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
