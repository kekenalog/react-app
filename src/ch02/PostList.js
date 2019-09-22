import React, { Component } from 'react'

import PostItem from './PostItem'
import { Welcome } from './Welcome'

const data = [
  {
    id: 1,
    title: '大家一起来讨论React吧',
    author: '张三',
    date: '2019-09-09 12:23:45',
    vote: 0
  },
  {
    id: 2,
    title: '前端框架,你最爱哪一种',
    author: '李四',
    date: '2019-09-10 12:23:45',
    vote: 0
  },
  {
    id: 3,
    title: 'Web App的时代已经结束',
    author: '王五',
    date: '2019-09-19 12:23:45',
    vote: 0
  }
]

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: data
    }
  }

  handleVote = (id) => {
    const posts = this.state.posts.map((item) => {
      const newItem = item.id === id ? { ...item, vote: item.vote + 1 } : item
      return newItem
    })

    this.setState({
      posts: posts
    })
  }

  render() {
    const parentMethod = {
      handleVote: this.handleVote
    }
    return (
      <div>
        帖子列表:
        <ul>
          {this.state.posts.map((item) => (
            <PostItem {...parentMethod} post={item} />
          ))}
        </ul>
        <span>
          <Welcome />
        </span>
      </div>
    )
  }
}

export default PostList
